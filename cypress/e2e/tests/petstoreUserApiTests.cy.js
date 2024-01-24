///<reference types="cypress" />

describe('User Api Tests', () => {

    it('POST /v2/user UserCreate', () => {
        const payload = {
            "id": 5,
            "username": "test",
            "firstName": "test123",
            "lastName": "example",
            "email": "test@hotmail.com",
            "password": "1111",
            "phone": "776785678",
            "userStatus": 0
        }
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            body: payload,
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Get /v2/user/ GetUserInfo', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/test')
        .then((response) => {
            expect(response.status).to.eq(200)
        })    
    })

    it('Get /v2/user/Logout', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/logout')
        .then((response) => {
            expect(response.status).to.eq(200)
        })    
    })

    it('Get /v2/user/Login', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/login?username=admin&password=admin')
        .then((response) => {
            expect(response.status).to.eq(200)
        })    
    })

    it('DELETE /v2/user/test UserDelete', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/user/test'
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('PUT /v2/user/ UpdateUser', () => {
        const payload = {
            "id": 8,
            "username": "testqa",
            "firstName": "example",
            "lastName": "qa456",
            "email": "testqa@gmail.com",
            "password": "6666",
            "phone": "875645343",
            "userStatus": 0
        }

        const headersPayload = {
            'Content-Type': 'application/json'
        }

        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/user/test',
            headers: headersPayload,
            body: payload
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('POST /v2/user/ CreateWithList', () => {
        const payload = [
            {
                "id": 3,
                "username": "testqateam",
                "firstName": "example",
                "lastName": "qa456",
                "email": "testqa@gmail.com",
                "password": "6666",
                "phone": "875645343",
                "userStatus": 0
            },
            {
                "id": 4,
                "username": "testqateam2",
                "firstName": "example",
                "lastName": "qa456",
                "email": "testqa@gmail.com",
                "password": "6666",
                "phone": "875645343",
                "userStatus": 0
            }
        ]    

        const headersPayload = {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }

        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/createWithList',
            headers: headersPayload,
            body: payload
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})    

    
















    
       
