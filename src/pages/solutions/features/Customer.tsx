import React, { useState, useEffect, useContext } from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/features";
import { SolutionFeature } from "../../../context/contexts";

export const FeatureCustomer: React.FC = () => {
  const [data, setData] = useState<any>({});
  const { solutionFeature } = useContext<any>(SolutionFeature);
  useEffect(() => {
    if (
      solutionFeature.filter((f: any) => f.page.key === "customer").length > 0
    ) {
      setData(solutionFeature.filter((f: any) => f.page.key === "customer")[0]);
    }
  }, [solutionFeature]);

  return data ? (
    <AppLayout is_new_book={true}>
      <Section.Title
        subtitle={data?.landing_subtitle}
        title={data?.landing_title}
      />
      <Section.Grid data={data?.grid_data} />
      <Section.Streamline
        data={data?.streamline_data}
        description={data?.stream_description}
        title={data?.stream_title}
      />
      <Section.AdmissionTable
        data={data?.table_data?.data}
        title={data?.table_title}
      />
    </AppLayout>
  ) : (
    <>No Data</>
  );
};
