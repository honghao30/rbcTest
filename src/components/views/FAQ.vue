<template>
  <div>
    <h2 class="page_title">FAQ</h2>
    <div class="tab_area">
        <ul class="tab_list">
            <li v-for="(item, i) in faqTab" :key=i class="tab_item">
                <a role="button" 
                    @click="tabCtrl(i)" 
                    :class="[{active: currentTab === i}]">
                    {{ item }}
                </a>
            </li>
        </ul>
        <div class="tab_contents">
            <div>탭 {{ this.currentTab + 1}}
                <div class="clp_item" v-for="(item, j) in clpList" :key="j">
                    <a role="button" @click="collapseCtrl(j)">{{item.q}}</a>
                    <div class="fold_contents" v-if="collapseIdx === j">
                        {{item.a}}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FAQ',
    data() {
        return {
            currentTab : 0,
            collapseIdx: undefined,
            faqTab: ['전체', '가입', '서비스 관리', '브랜드 관리', '대화방 관리', '템플릿 관리', '자동응답 관리', '브랜드 소식 관리', '기타'],
            clpList: [{
                q : '질문1',
                a : '답변1'
            },
            {
                q : '질문2',
                a : '답변2'
            }]
        }
    },
    methods: {
        tabCtrl: function(num) {
            this.currentTab = num;
            this.collapseIdx = NaN
        },
        collapseCtrl: function(num) {
            if(this.collapseIdx == num) {
                this.collapseIdx = undefined;
            }else {
                this.collapseIdx = num
            }
        }
    }
}
</script>

<style>
.tab_list {display: flex;}
.tab_item {margin-left:30px;}
.tab_item a {cursor: pointer}
.active {color: tomato}
li {list-style: none;}
.clp_item {cursor: pointer}
</style>