<?php

namespace App\Protocol;

use App\Config\YlyConfig;
use Exception;
class YlyRpcClient{

    private $clientId;
    private $clientSecret;
    private $requestUrl;
    private $token;
    private $log;


    public function __construct($token, YlyConfig $config)
    {
        $this->clientId = $config->getClientId();
        $this->clientSecret = $config->getClientSecret();
        $this->requestUrl = $config->getRequestUrl();
        $this->log = $config->getLog();
        $this->token = $token;
    }


    public function call($action, array $params)
    {
        $time = time();
        $params = array_merge(array(
            'client_id' => $this->clientId,
            'timestamp' => $time,
            'sign' => $this->getSign($time),
            'id' => $this->uuid4(),
            'access_token' => $this->token,
        ), $params);
        $result = $this->send($params, $this->requestUrl . '/' .$action);
        $response = json_decode($result, false, 512, JSON_BIGINT_AS_STRING);
        if (is_null($response)) {
            throw new Exception("invalid response.", $response->error);
        }
        if (
            isset($response->error) &&
            $response->error != 0
        ){
            $errorDescription = isset($response->body) ? $response->error_description . $response->body : $response->error_description;
            throw new Exception('Call method ' . $action . ' error code is ' . $response->error . ' error message is ' . $errorDescription, $response->error);
        }

        return $response;
    }


    public function getSign($timestamp)
    {
        return md5(
            $this->clientId.
            $timestamp.
            $this->clientSecret
        );
    }


    public function uuid4(){
        mt_srand((double)microtime() * 10000);
        $charid = strtolower(md5(uniqid(rand(), true)));
        $hyphen = '-';
        $uuidV4 =
            substr($charid, 0, 8) . $hyphen .
            substr($charid, 8, 4) . $hyphen .
            substr($charid, 12, 4) . $hyphen .
            substr($charid, 16, 4) . $hyphen .
            substr($charid, 20, 12);
        return $uuidV4;
    }


    public function send($data,$url)
    {
        $requestInfo = http_build_query($data);
        $log = $this->log;
        if ($log != null) {
            $log->info("request data: " . $requestInfo);
        }
        $curl = curl_init(); // 启动一个CURL会话
        curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0); // 对认证证书来源的检测
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
            'Expect:'
        )); // 解决数据包大不能提交
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
        curl_setopt($curl, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
        curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
        curl_setopt($curl, CURLOPT_POSTFIELDS, $requestInfo); // Post提交的数据包
        curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循
        curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
        $response = curl_exec($curl); // 执行操作
        if (curl_errno($curl)) {
            if ($log != null) {
                $log->error("error: " . curl_error($curl));
            }
            throw new Exception(curl_error($curl));
        }
        if ($log != null) {
            $log->info("response: " . $response);
        }
        curl_close($curl); // 关键CURL会话
        return $response; // 返回数据
    }



}
