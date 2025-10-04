import { Helmet } from "react-helmet-async";
import PageHeader from "../../components/PageHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper";


const index = () => {
  return (
    <div>
      <Helmet>
        <title>Payment</title>
      </Helmet>
         <PageTitleWrapper>
      <PageHeader title ="Logs" btntitle="" icon={""} onActionClick={()=>{}} />
      </PageTitleWrapper>
      
    </div>
  )
}

export default index
