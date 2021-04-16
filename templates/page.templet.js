const team = (myTeam) => {
    //manager
    const manager = (myManager) => {
        return `
  <div class="card">
  <div class="card employee-card">
      <div class="card-header">
      <h2 class="card-title">
          ${myManager.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-user-tie"></i></h3>
          <div class="card-title"></div>
         
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${myManager.getId()}</li>
                  <li class="list-group-item">Email: <a href="mail:${myManager.getEmail()}"></a></li>
                  <li class="list-group-item">Office Number: ${myManager.getOfficeNumber()}</i>
              </ul>
          </div>
      </div>
  </div>
</div>
`;
    };

    //engineer
    const engineer = (engineer) => {
        return `
    <div class="card">
    <div class="card employee-card">
        <div class="card-header">
        <h2 class="card-title">
            ${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-tie"></i></h3>
            <div class="card-title"></div>
           
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mail:${engineer.getEmail()}"></a></li>
                    <li class="list-group-item">GitHub:<a href="https://github.com/ ${engineer.getGithub()}</i>
                </ul>
            </div>
        </div>
    </div>
  </div>
  `;
    };

    //intern
    const intern = (intern) => {
        return `
      <div class="card">
      <div class="card employee-card">
          <div class="card-header">
          <h2 class="card-title">
              ${intern.getName()}</h2>
              <h3 class="card-title"><i class="fas fa-user-tie"></i></h3>
              <div class="card-title"></div>
             
              <div class="card-body">
                  <ul class="list-group">
                      <li class="list-group-item">ID: ${intern.getId()}</li>
                      <li class="list-group-item">Email: <a href="mail:${intern.getEmail()}"></a></li>
                      <li class="list-group-item">school:${engineer.getGithub()}</i>
                  </ul>
              </div>
          </div>
      </div>
    </div>
    `;
    };
};