import { Helmet } from "react-helmet-async";
import PageHeader from "src/components/PageHeader";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import Store from "./TableStore";

const index = () => {
  return (
    <div>
      <Helmet>
        <title>Payment</title>
      </Helmet>
         <PageTitleWrapper>
      <PageHeader title ="Logs" btntitle="" icon={""} onActionClick={()=>{}}/>
      </PageTitleWrapper>
      <Store/>
    </div>
  )
}

export default index
