import React, { useState, useContext, useEffect } from "react";
import { AppLayout } from "../../layouts";
import * as Section from "../../modules/home";
import { Home as HomeContext } from "../../context/contexts";

export const Home: React.FC = () => {
  const [data, setData] = useState<any>({});
  const { homeContext } = useContext<any>(HomeContext);

  useEffect(() => {
    if (homeContext) {
      setData(homeContext);
      console.log(homeContext);
    }
  }, [homeContext]);

  return (
    <AppLayout>
      <Section.Landing
        description={data?.landing_description}
        title_array={data?.landing_title_array}
        title_prefix={data?.landing_title_prefix}
        title_suffix={data?.landing_title_suffix}
      />
      <Section.Experience
        data={data?.experience_data}
        title={data?.experience_title}
      />
      <Section.Solutions
        data={data?.solution_data}
        subtitle={data?.solution_subtitle}
        title={data?.solution_title}
      />
      <Section.Features
        data={data?.feature_data}
        icon={data?.feature_icon}
        image={data?.feature_image}
        subtitle={data?.feature_subtitle}
        text={data?.feature_text}
        title={data?.feature_title}
      />
      <Section.Institutions
        data={data?.home_institutions}
        subtitle={data?.institution_subtitle}
        title={data?.institution_title}
      />
      <Section.Discover />
      <Section.Resources data={data?.resources} title={data?.resource_title} />
    </AppLayout>
  );
};
