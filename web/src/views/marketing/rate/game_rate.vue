<template>
  <div class="user-withdrawal">
    <div class="ls-card">
      <el-alert class="xxl" title="温馨提示： 游戏胜率列表。" type="info" :closable="false" show-icon> </el-alert>
      <div class="journal-search m-t-16">
        <el-form ref="formRef" inline :model="form" label-width="70px" size="small" class="ls-form">
          <el-form-item label="用户信息">
            <el-select v-model="isNameSN" placeholder="全部" style="width: 120px">
              <el-option label="用户ShortId" value="1"></el-option>
              <el-option label="用户昵称" value="2"></el-option>
              <el-option label="手机号码" value="3"></el-option>
              <el-option label="真实姓名" value="4"></el-option>
            </el-select>
            <el-input v-if="isNameSN == 1" v-model="form.playerShortId" placeholder=""> </el-input>
            <el-input v-if="isNameSN == 2" v-model="form.name" placeholder=""></el-input>
            <el-input v-if="isNameSN == 3" v-model="form.playerPhone" placeholder=""></el-input>
            <el-input v-if="isNameSN == 4" v-model="form.realName" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="游戏类型">
            <div class="flex">
              <el-select style="width: 120px" v-model="form.game" placeholder="全部">
                <el-option label="全部" value></el-option>
                <el-option label="炸弹" value="zhadan"></el-option>
                <el-option label="标分" value="biaofen"></el-option>
                <el-option label="麻将" value="majiang"></el-option>
                <el-option label="跑得快" value="paodekuai"></el-option>
                <el-option label="十三水" value="shisanshui"></el-option>
                <el-option label="厦门麻将" value="xmmajiang"></el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item label="局数">
            <el-input class="ls-select-keyword" v-model="form.juShu" placeholder="请输入局数"></el-input>
          </el-form-item>
          <el-form-item label="记录时间">
            <el-date-picker
              v-model="tableData"
              type="datetimerange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              :picker-options="pickerOptions"
              @change="splitTime"
              value-format="yyyy-MM-dd HH:mm:ss"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="排序">
            <el-select v-model="form.keyword" placeholder="全部" style="width: 120px">
              <el-option label="房间数" value="totalJu"></el-option>
              <el-option label="房间胜率" value="juRate"></el-option>
              <el-option label="房间输局" value="failJu"></el-option>
              <el-option label="房间输局积分" value="failJuScore"></el-option>
              <el-option label="房间总积分" value="totalJuScore"></el-option>
            </el-select>
            <el-select v-model="form.value" placeholder="全部" style="width: 120px">
              <el-option label="降序" value="desc"></el-option>
              <el-option label="升序" value="asc"></el-option>
            </el-select>
          </el-form-item>

          <el-button size="small" type="primary" @click="getList(1)">查询</el-button>
          <el-button size="small" @click="onReset">重置</el-button>
        </el-form>
      </div>
    </div>
    <!-- 提现记录表 -->
    <div class="ls-withdrawal__centent ls-card m-t-16">
      <div class="list-table m-t-16">
        <el-table
          :data="pager.lists"
          style="width: 100%"
          v-loading="pager.loading"
          size="mini"
          :header-cell-style="{ background: '#f5f8ff' }"
        >
          <el-table-column prop="shortId" label="用户编号">
            <template slot-scope="scope">
              <div
                @click="navicatToUserByShortId(scope.row.shortId)"
                style="color: #3967ff; cursor: pointer"
              >
                {{ scope.row.shortId }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="用户昵称"> </el-table-column>
          <el-table-column prop="totalJu" label="房间数"> </el-table-column>
          <el-table-column prop="juRate" label="房间胜率"></el-table-column>
          <el-table-column prop="winJu" label="房间赢局"> </el-table-column>
          <el-table-column prop="failJu" label="房间输局"> </el-table-column>
          <el-table-column prop="totalJuScore" label="房间积分"> </el-table-column>
          <el-table-column prop="winJuScore" label="房间赢局积分"> </el-table-column>
          <el-table-column prop="failJuScore" label="房间输局积分"> </el-table-column>
          <el-table-column prop="isHelp" label="状态"> </el-table-column>
          <el-table-column prop="estimateLevel" label="救助等级"> </el-table-column>
          <el-table-column prop="createAt" label="时间"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="RateClick(scope.row)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="flex row-right m-t-16 row-right">
        <ls-pagination v-model="pager" @change="getList()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { apiUserGameRateRankList } from '@/api/finance/finance'
import { RequestPaging } from '@/utils/util'
import LsPagination from '@/components/ls-pagination.vue'
@Component({
  components: {
    LsPagination
  }
})
export default class AccountLog extends Vue {
  // 日期选择器
  pickerOptions: any = {
    shortcuts: [
      {
        text: '今日',
        onClick(picker: any) {
          let end = new Date().setHours(23, 59, 59, 999)
          let start = new Date().setHours(0, 0, 0, 0)
          picker.$emit('pick', [new Date(start), new Date(end)])
        }
      },
      {
        text: '昨日',
        onClick(picker: any) {
          let start = new Date().setHours(0, 0, 0, 0)
          let end = new Date().setHours(0, 0, 0, 0)
          start = start - 3600 * 1000 * 24
          picker.$emit('pick', [new Date(start), new Date(end)])
        }
      },
      {
        text: '最近三天',
        onClick(picker: any) {
          let start = new Date().setHours(0, 0, 0, 0)
          let end = new Date().setHours(0, 0, 0, 0)
          start = start - 3600 * 1000 * 24 * 3
          picker.$emit('pick', [new Date(start), new Date(end)])
        }
      },
      {
        text: '最近一周',
        onClick(picker: any) {
          let start = new Date().setHours(0, 0, 0, 0)
          let end = new Date().setHours(0, 0, 0, 0)
          start = start - 3600 * 1000 * 24 * 7
          picker.$emit('pick', [new Date(start), new Date(end)])
        }
      },
      {
        text: '本周',
        onClick(picker: any) {
          let day = new Date().getDay();
          let end = new Date().setHours(0, 0, 0, 0)
          let start = end - 3600 * 1000 * 24 * day
          picker.$emit('pick', [new Date(start), new Date(end)])
        }
      },
      {
        text: '上周',
        onClick(picker: any) {
          let day = new Date().getDay();
          let end = new Date().setHours(0, 0, 0, 0) - 3600 * 1000 * 24 * day;
          let start = end - 3600 * 1000 * 24 * 7
          picker.$emit('pick', [new Date(start), new Date(end)])
        }
      },
      {
        text: '本月',
        onClick(picker: any) {
          var today = new Date();
          var month = new Date(today.getFullYear(), today.getMonth(), 1);
          var firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getTime();
          var lastDay = new Date().setHours(0,0,0,0);

          picker.$emit('pick', [new Date(firstDay), new Date(lastDay)])
        }
      },
      {
        text: '上月',
        onClick(picker: any) {
          var today = new Date();
          var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
          var firstDay = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1).getTime();
          var lastDay = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 1).getTime();

          picker.$emit('pick', [new Date(firstDay), new Date(lastDay)])
        }
      },
      {
        text: '最近一个月',
        onClick(picker: any) {
          let start = new Date().setHours(0, 0, 0, 0)
          let end = new Date().setHours(0, 0, 0, 0)
          start = start - 3600 * 1000 * 24 * 30
          picker.$emit('pick', [new Date(start), new Date(end)])
        }
      },
      {
        text: '最近三个月',
        onClick(picker: any) {
          let start = new Date().setHours(0, 0, 0, 0)
          let end = new Date().setHours(0, 0, 0, 0)
          start = start - 3600 * 1000 * 24 * 90
          picker.$emit('pick', [new Date(start), new Date(end)])
        }
      }
    ]
  }
  tableData = []
  // 顶部查询表单
  pager: RequestPaging = new RequestPaging()
  isNameSN = '' // 选择用户编号1 选择用户昵称2 手机号码3,真实姓名4
  // 顶部查询表单
  form: any = {
    name: '', // 用户昵称
    playerShortId: '', // 用户编号
    start_time: '',
    end_time: '',
    playerPhone: '', // 手机号
    realName: '',
    game: '',
    juShu: '',
    keyword: '',
    value: 'desc',
    sort_key: 'isHelp'
  }

  time: any = {
    start_time: '',
    end_time: ''
  }

  // 监听用户信息查询框条件
  @Watch('isNameSN', {
    immediate: true
  })
  getChange(val: any) {
    // 初始值
    this.form.name = ''
    this.form.playerShortId = ''
    this.form.playerPhone = ''
    this.form.realName = ''
  }

  splitTime() {
    if (this.tableData != null) {
      this.time.start_time = this.tableData[0]
      this.time.end_time = this.tableData[1]
    }
  }
  // 重置
  onReset() {
    this.form = {
      name: '', // 用户昵称
      playerShortId: '', // 用户编号
      start_time: '',
      end_time: '',
      playerPhone: '', // 手机号
      realName: '',
      game: '',
      juShu: '',
      keyword: '',
      value: 'desc',
      sort_key: 'isHelp'
    }
    this.tableData = []

    this.getList()
  }

  RateClick(item: any) {
    this.$router.push({
      path: '/marketing/rate/help',
      query: {
        _id: item._id
      }
    })
  }

  formatInitTime() {
    // 获取当前时间
    let today = new Date()

    // 获取当日零点时间并转化为格式化字符串
    let zeroTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0).toLocaleString('zh', {
      hour12: false
    })

    // 获取当日23：59：59时间并转化为格式化字符串
    let endTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59).toLocaleString(
      'zh',
      { hour12: false }
    )

    // 输出格式化后的时间
    console.log('当日零点时间：' + zeroTime) // 2022-03-09 00:00:00
    console.log('当日23：59：59时间：' + endTime) // 2022-03-09 23:59:59
    return [zeroTime, endTime]
  }

  isFormEmpty() {
    let flag = true
    for (let prop in this.form) {
      if (this.form.hasOwnProperty(prop) && this.form[prop] != '' && !['start_time', 'end_time'].includes(prop)) {
        flag = false
      }
    }
    this.form.start_time = this.time.start_time ? this.time.start_time : flag ? this.formatInitTime()[0] : ''
    this.form.end_time = this.time.end_time ? this.time.end_time : flag ? this.formatInitTime()[1] : ''
  }

  // 资金记录
  getList(page?: number): void {
    this.isFormEmpty()
    if (this.form.keyword) {
      this.form.sort_key = this.form.keyword
    }
    page && (this.pager.page = page)
    this.pager
      .request({
        callback: apiUserGameRateRankList,
        params: {
          ...this.form
        }
      })
      .then((res: any) => {})
  }

  navicatToUserByShortId(shortId: any) {
    this.$router.push({
      path: '/user/lists',
      query: {
        shortId
      }
    })
  }

  created() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped></style>

