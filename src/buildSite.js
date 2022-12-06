function teamMaker(EmployeeRegister) {

    result = `            <article class="panel column is-dark">
    <p class="panel-heading">${EmployeeRegister[0].getName()}<span class="tag is-light">${EmployeeRegister[0].getRole()}</span></p>
    <div class="panel-block">
        <div class="field">
            <div class="box">${EmployeeRegister[0].getID()}</div>
            <div class="box">${EmployeeRegister[0].getEmail()}</div>
            <div class="box">${EmployeeRegister[0].officeNumber}</div>
        </div>
    </div>
</article>\n`;

    EmployeeRegister.shift();

    EmployeeRegister.forEach(element => {
        if (element.getRole() == `Engineer`) {
            result+=`            <article class="panel column is-dark">
            <p class="panel-heading">${element.getName()}<span class="tag is-light">${element.getRole()}</span></p>
            <div class="panel-block">
                <div class="field">
                    <div class="box">${element.getID()}</div>
                    <div class="box">${element.getEmail()}</div>
                    <div class="box">${element.getGithub()}</div>
                </div>
            </div>
        </article>\n`;
        } else {
            result+=`            <article class="panel column is-dark">
            <p class="panel-heading">${element.getName()}<span class="tag is-light">${element.getRole()}</span></p>
            <div class="panel-block">
                <div class="field">
                    <div class="box">${element.getID()}</div>
                    <div class="box">${element.getEmail()}</div>
                    <div class="box">${element.getSchool()}</div>
                </div>
            </div>
        </article>\n`
        }
    });
    return result;
}

module.exports = function (EmployeeRegister) {
    const page = `<!DOCTYPE html>

    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ChummierWIP</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link href="./assets/style.css" type="text/css" rel="stylesheet">
    </head>
    
    <body>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-2">My Team</h1>
                </div>
            </div>
        </section>
        <section class="box">
            <div class="columns .is-multiline">
            ${teamMaker(EmployeeRegister)}
            </div>
        </section>
    </body>`;

    return page;
};