import { Helmet } from "react-helmet-async";
import PageHeader from "src/components/PageHeader";
import PageTitleWrapper from "src/components/PageTitleWrapper";


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
