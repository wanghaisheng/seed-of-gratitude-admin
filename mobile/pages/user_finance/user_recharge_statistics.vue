<template>
	<view class="verification-list">
		<mescroll-uni ref="mescrollRef" top="0rpx" @init="initCallback" @up="upCallback" :up="upOption"
			@down="downCallback">
			<block>
				<view class="order-contain">
					<view class="order" v-for="item in lists" :key="item._id">
						<view class="order-header">
							<view class="flex user">
								<view class="order-status--primary">日期:{{ item.dayId }}</view>
							</view>
						</view>

						<view class="order-main">
							<view class="goods-wrap">
								<view class="m-l-16 line-1">
									<view class="muted flex row-between xs m-t-20">
										<view>微信充值金币:{{ item.wechatGold }}</view>
										<view>微信充值房卡:{{item.adminGem}}</view>
									</view>
									<view class="muted flex row-between xs m-t-20">
										<view>后台充值金币:{{ item.adminGold }}</view>
										<view>后台充值房卡:{{item.adminGem}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</block>
		</mescroll-uni>
	</view>
</template>


<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import {
		apiUserRechargeStatisticsLists
	} from '@/api/finance'

	export default {
		name: 'UserRechargeStatistics',
		mixins: [MescrollMixin],

		data() {
			return {
				lists: [],
				page_no: 0,
				page_size: 10,
				mescroll: null,
				upOption: {
					empty: {
						icon: '/static/images/empty/money.png',
						tip: '暂无更多记录！', // 提示
						fixed: true,
						top: "200rpx",
					}
				}
			}

		},

		methods: {
			// 初始化回调
			initCallback(ele) {
				console.log("初始化")
				if (this.mescroll === null) this.mescroll = ele
			},
			
			upCallback(e) {
				this.page_no = this.page_no + 1
				this.loadData()
			},

			loadData() {
				apiUserRechargeStatisticsLists({
					page_no: this.page_no,
					page_size: this.page_size,
				}).then(({
					lists,
					page_size,
					count
				}) => {
					this.lists = this.lists.concat(lists);
					console.log(this.lists);
					this.mescroll.endSuccess(lists.length, lists.length > 0 ? true : false)
				}).catch(err => {
					console.log(err)
				})
			},
		},

	}
</script>


<style lang="scss" scoped>
	.verification-list {
		display: flex;
		flex-direction: column;
		// max-height: 100vh;
		// overflow: hidden;
		padding-bottom: 200rpx;
	}

	.goods {
		width: 100%;
		padding: 20rpx;

		&-wrap {
			width: 100%;
			display: flex;

			.goods-name {
				color: #101010;
				font-size: $-font-size-nr;
			}

			.goods-price {
				color: #FF0000;
				font-size: $-font-size-nr;
			}

			>view {
				width: 100%;
			}

			.image {
				flex: 0;
			}
		}


	}

	.order-contain {
		padding: 10rpx 20rpx;

		.button {
			display: flex;
			justify-content: end;

			button {
				width: 200rpx;
				background-color: $-color-primary;
				color: #FFFFFF;
				height: 70rpx;
				border-radius: 70rpx;
			}
		}

		.order {
			padding: 0 20rpx 20rpx 20rpx;
			margin-top: 20rpx;
			border-radius: 5px;
			background-color: #FFFFFF;

			&-header {
				display: flex;
				height: 80rpx;
				align-items: center;
				justify-content: space-between;
				padding-right: 20rpx;
				border-bottom: $-dashed-border;

				.user {
					font-size: 26rpx
				}

				.order-status {
					margin-left: auto;
					font-size: $-font-size-sm;

					&--primary {
						color: $-color-primary;
					}

					&--muted {
						color: $-color-muted;
					}
				}
			}

			&-main {
				&__spec {
					display: flex;
					justify-content: space-between;
					height: 100%;
				}
			}
		}
	}

	.operation {
		position: fixed;
		z-index: 99;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx calc(20rpx + constant(safe-area-inset-bottom)) 20rpx;
		padding: 0 20rpx calc(20rpx + env(safe-area-inset-bottom)) 20rpx;

		&-button {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 82rpx;
			border-radius: 60px;
			font-size: $-font-size-nr;
			background-color: $-color-primary;
			color: #FFFFFF;

			&:nth-child(n+2) {
				margin-left: 20rpx;
			}
		}
	}
</style>
