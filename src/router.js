import PubPage from './page/PubPage'; // 퍼블페이지
import HomeComponent from './components/views/HomeComponent';
import RBCService from './components/views/RBCService';
import PartnerCompany from './components/views/PartnerCompany';
import CSNotice from './components/views/CSNotice';
import FAQ from './components/views/FAQ';

const routes = [
    {path: "/page", component: PubPage}, //퍼블페이지
    {path: "/", component: HomeComponent},
    {path: "/service", component: RBCService},
    {path: "/partners", component: PartnerCompany},
    {path: "/notice", component: CSNotice},
    {path: "/faq", component: FAQ}
];


export default routes;