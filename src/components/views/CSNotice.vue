<template>
    <div>
        <h2 class="page_title">공지사항</h2>
        <div class="list_wrap">
            <div class="sch_form">

            </div>
            <table>
                <caption></caption>
                <colgroup>
                    <col>
                    <col>
                    <col>
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>  
                    <tr  v-for="(item, i) in orderedList"  :key="i">
                        <td><span v-if="item.noticeY">공지</span><span v-else-if="!item.noticeY">{{ item.number }}</span></td>
                        <td><a href="">{{ item.title }}</a></td>
                        <td>{{ item.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CNNotice',
    data() {
        return {
            noticeList : [
                {
                    number: 10,
                    noticeY: true,
                    title: "[공지]BizRCS 정책 업데이트 노트",
                    date: "2022-11-04"
                },
                {
                    number: 8,
                    noticeY: false,
                    title: "(중요공지) RCS 메시지 발송 규격 추가 예정 안내",
                    date: "2022-04-11"
                },
                {
                    number: 7,
                    noticeY: true,
                    title: "RCS Biz Center 검수기 승인 안내",
                    date: "2022-03-10"
                },
                {
                    number: 6,
                    noticeY: false,
                    title: "RCS Biz Center 검수기 승인 안내",
                    date: "2022-03-10"
                }
            ]
        }
    },
    computed: {
        orderedList() {
            return _.orderBy(this.noticeList, ['noticeY'], ['desc']);
        }
    }
}
</script>

<style>

</style>