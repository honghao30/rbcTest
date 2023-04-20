<template>
<div class="ia__list">
	<div class="ia__header">
		<h1 class="ia__title">RCS Biz Center 리뉴얼 - 퍼블리싱 현황판</h1>
	</div>
	<div class="ia__content" role="main">
		<div class="ia__note">
			<div class="ia__note__box">
				<h4 class="ia__note__title">Note</h4>
				<ul class="ia__note__desc">
					<li>※ IA 기준으로 목록 업데이트 필요</li>
					<li>- 완료시 상태항목에 [완료]</li>
					<li>- 상태값에 [완료] 문구 등록시 완료페이지로 표시됨.</li>
				</ul>
			</div>
		</div>
		<PubComponent :list="guideList" title="Guide"/>
		<PubComponent :list="homeList" title="Home"/>
		<PubComponent :list="dashboardList" title="대시보드"/>
	</div>
</div>
</template>

<script>
import { guideList, homeList, dashboardList }  from './page.js'
import PubComponent from './PubComponent.vue'

export default {
    name: 'PubPage',
	components: {
		PubComponent
	},
	data() {
        return {
			guideList,
			homeList,
			dashboardList
		}
	}
}
</script>

<style scoped>
.ia__list {background:#fff;}
.ia__title {background:#5D38DF;color:#fff;font-size:20px;padding:15px 30px;}
.ia__content {padding:20px 30px 50px;}
.ia__note {background-color:#eee;padding:20px;}
.ia__note__title {color:#343b45;font-weight:700;margin-bottom:10px;}
.ia__note__desc {line-height:1.6;}

</style>