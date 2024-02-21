# growth-challenge
![Logo](./src/assets/logo.jpg)

<b>Challenge code to growth machine

### Clonar esse repositório
    git clone https://github.com/RossyFranca/growth-challenge.git

### Instalação

    npm install

### Rodar os testes
    existem 2 scripts pré definidos:
vai rodar todos os testes
    
    npm run test  
vai rodar todos os testes smoke, ou seja os principaios cenários  

    npm run test-smoke    


### Playwright
Os testes estão configurados para rodar no modo headless e em três navegadores

### 🌐 Browsers

 ![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)      ![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white)         ![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox&logoColor=white)                                                                                                                 

## Ferramentas
[![GitHub Actions](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=30A3DC)](https://docs.github.com/)
[![Git](https://img.shields.io/badge/Git-000?style=for-the-badge&logo=git&logoColor=E94D5F)](https://git-scm.com/doc) 
[![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![playwright](https://img.shields.io/badge/Playwright-blackgreen?style=for-the-badge&logo=playwright&logoColor=white)](https://www.typescriptlang.org/)



## Test Scenarios

### 1. Login Scenarios

| #   | Test Case                               | Description                                       | Smoke Test |
| --- | --------------------------------------- | ------------------------------------------------- | ---------- |
| 1   | Login with success                      | Verify successful login with valid credentials.   | Yes        |
| 2   | Logout                                  | Verify user can successfully log out.             | No         |
| 3   | Wrong password                         | Verify appropriate error message for wrong password. | No      |
| 4   | Wrong user                             | Verify appropriate error message for wrong username. | No      |
| 5   | Empty fields                           | Verify error messages for empty login fields.     | No         |
| 6   | Is not a client                        | Verify redirection to an external page for non-clients. | Yes |
| 7   | Forgot password                        | Verify functionality to recover forgotten password. | No     |

### 2. Play Book Administrator Scenarios

| #   | Test Case                               | Description                                       | Smoke Test |
| --- | --------------------------------------- | ------------------------------------------------- | ---------- |
| 1   | Playbook edit mode by an administrator  | Verify administrator can edit Playbook in edit mode. | Yes       |



### Orientações para contribuição

``Existem 2 branchs, main e develop. Para contribuir com este projeto é necessário criar uma nova branch a partir de develop com a nomenclatura feature-[nome da funcionalidade]. Foi utilizado as configurações do github para impedir push direto para a main branch. Outras configurações como análise e aprovação não foram utilizadas pela limitação de só haver um usuário até o momento.
``







    May the force be with us



<b> By Rossywan França

