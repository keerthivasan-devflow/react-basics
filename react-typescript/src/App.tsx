import BasicProps from "./typescript/BasicProps";

const App = () => {
  return (
    <div>
      <BasicProps
        fullname="Keerthivasan"
        age={27}
        isMarried={false}
        babies={["Lakshashree", "Parvesh"]}
        address={{
          doorno: 272,
          street: "RMM Nagar",
          pincode: 639101,
        }}
        employement={[
          {
            office: "Capgemini",
            years: 2.5,
          },
          {
            office: "Cognizant",
            years: 2.5,
          },
          {
            office: "Synechron",
            years: 8,
          },
        ]}
      />
    </div>
  );
};

export default App;
