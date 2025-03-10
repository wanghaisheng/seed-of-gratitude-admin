#!/bin/bash
# 文件原路径
srcPath="./dist/"
# 发布路径文件夹
releasePath="/opt/server/public/admin"

#删除发布目录下的文件
rm -r $releasePath
echo "已删除 ==> $releasePath 下的目录文件"
mkdir $releasePath
echo "已新建 ==> $releasePath 目录"

# 复制打包目录内的文件到发布目录
cp -r $srcPath/* $releasePath
echo "已复制 $srcPath/* ==> $releasePath"

cp $releasePath/../favicon.ico $releasePath