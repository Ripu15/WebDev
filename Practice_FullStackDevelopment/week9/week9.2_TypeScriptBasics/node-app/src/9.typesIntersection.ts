type employee = {
    name: string;
    startDate: Date;
  };
  
  // type Manager = {
  //   name: string;
  //   department: string;
  // };

  interface Manager  {
    name: string;
    department: string;
  };
  
  type TeamLead = employee & Manager;
  
  const teamLead: TeamLead = {
    name: "ripudaman",
    startDate: new Date(),
    department: "Software developer"
  };

  console.log(teamLead.department);