<template>
    <div class="user-withdrawal">
        <div class="ls-card">
            <el-alert class="xxl" title="救助记录。" type="info" :closable="false" show-icon> </el-alert>
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
                  <el-form-item label="游戏">
                    <el-select v-model="form.game" placeholder="全部" style="width: 120px">
                      <el-option label="炸弹" value="zhadan"></el-option>
                      <el-option label="麻将" value="majiang"></el-option>
                      <el-option label="跑得快" value="paodekuai"></el-option>
                      <el-option label="十三水" value="shisanshui"></el-option>
                      <el-option label="标分" value="biaofen"></el-option>
                      <el-option label="厦门麻将" value="xmmajiang"></el-option>
                    </el-select>
                  </el-form-item>
                    <el-form-item label="等级">
                        <el-input
                            class="ls-select-keyword"
                            v-model="form.level"
                            placeholder="请输入救助等级"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="房间号">
                        <el-input class="ls-select-keyword" v-model="form.roomId" placeholder="请输入房间号"></el-input>
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
                    <el-table-column prop="playerInfo.shortId" label="用户编号"> </el-table-column>
                    <el-table-column prop="playerInfo.name" label="用户昵称"> </el-table-column>
                    <el-table-column prop="gameStr" label="游戏"> </el-table-column>
                    <el-table-column prop="room" label="房间号"> </el-table-column>
                    <el-table-column prop="juIndex" label="小局"> </el-table-column>
                    <el-table-column prop="useJoker" label="对局类型"> </el-table-column>
                    <el-table-column prop="coolingcycle" label="冷却局数"></el-table-column>
                    <el-table-column prop="level" label="等级"> </el-table-column>
                    <el-table-column label="救助牌" width="550">
                        <template slot-scope="scope">
                            <div class="card-item">
                                <img
                                  v-if="['zhadan', 'paodekuai', 'shisanshui', 'biaofen'].includes(scope.row.game)"
                                  class="card-image"
                                  v-for="(item1, index1) in scope.row.cardLists"
                                  :key="index1"
                                  :src="formatImagePath(item1)"
                                  :style="cardImageStyle(index1)"
                                  alt=""/>

                                <img
                                  v-if="scope.row.game === 'majiang'"
                                  class="card-image"
                                  v-for="(item, index) in scope.row.cardLists"
                                  :key="index"
                                  :src="formatMahjongImagePath(item)"
                                  :style="cardMahjongImageStyle(index)"
                                  alt=""/>
                            </div>

                        </template>
                    </el-table-column>
                    <el-table-column label="原有牌" width="200">
                        <template slot-scope="scope">
                            <div class="card-item" v-if="scope.row.game === 'zhadan'">
                                <img
                                  class="card-image"
                                  v-for="(item1, index1) in scope.row.useCards"
                                  :key="index1"
                                  :src="formatImagePath(item1)"
                                  :style="cardImageStyle(index1)"
                                  alt=""/>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="createAt" label="时间"> </el-table-column>
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
import { apiUserHelpRecordLists } from '@/api/marketing/index.ts'
import { RequestPaging } from '@/utils/util'
import LsPagination from '@/components/ls-pagination.vue'
@Component({
    components: {
        LsPagination
    }
})
export default class AccountLog extends Vue {
    /** S Data **/
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
    form = {
        name: '', // 用户昵称
        playerShortId: '', // 用户编号
        start_time: '',
        end_time: '',
        playerPhone: '', // 手机号
        realName: '',
        game: '',
        level: '',
        roomId: ''
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

    cardImageStyle(index: number) {
        const left = 10 + 20 * index
        return { left: `${left}px` }
    }

    formatImagePath(item: any) {
        console.log(`@/assets/images/thirteen/${item.type}_${item.value}.png`)
        return require(`@/assets/images/thirteen/${item.type}_${item.value}.png`)
    }

    formatMahjongImagePath(value: any) {
        console.log(`@/assets/images/mahjong/${value}.png`)
        return require(`@/assets/images/mahjong/${value}.png`)
    }

    cardMahjongImageStyle(index: number) {
        const left = 10 + 40 * index
        return { left: `${left}px` }
    }

        /** S Methods **/
    splitTime() {
        if (this.tableData != null) {
            this.form.start_time = this.tableData[0]
            this.form.end_time = this.tableData[1]
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
            level: '',
            roomId: ''
        }
        this.tableData = []

        this.getList()
    }

    getList(page?: number): void {
        page && (this.pager.page = page)
        this.pager
            .request({
                callback: apiUserHelpRecordLists,
                params: {
                    ...this.form
                }
            })
            .then((res: any) => {})
    }

    created() {
        this.getList()
    }
}
</script>

<style lang="scss" scoped>
.card-item {
    //width: 100px;
    position: relative;
    display: inline-block;
    height: 70px;
}

.card-image {
    display: block;
    left: 0px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    width: 50px;
}
</style>
