const team = (myTeam) => {
  const manager = (myManager) => {
    return `
        <div class="card">
        <h2 class="card-title">
        ${myManager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-tie"></i></h3>
        <p class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID:  ${myManager.getId()}</li>
        <li class="list-group-item">Email:<a href="mail:${myManager.getEmail()}"></a></li>
        <li class="list-group-item">Office Number: ${myManager.getOfficeNumber()}</i>

        
        </ul>

        </div>
        `;
  };
};
