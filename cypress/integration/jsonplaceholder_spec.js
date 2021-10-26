describe("Validate jsonplaceholder posts", () => {
    it('visits jsonplaceholder posts', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts')
            .should((response) => {

                // console.log("Response Body: " , response.headers)
                expect(response.status).to.eq(200)
                expect(response).to.have.property('headers');
                expect(response).to.have.property('duration');

                expect(response.headers['content-type']).to.contain('application/json;');
                expect(response.headers['content-type']).to.contain('charset=utf-8');

                let expected0Title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
                expect(response.body[0].title).to.eq(expected0Title);

                let expected0Body = "nostrum rerum est autem sunt rem eveniet architecto";
                expect(response.body[0].body).to.contain(expected0Body);

                let userIdX = response.body[0].userId;
                let x = Number(userIdX);
                expect(x).to.be.a('number');

                let item;
                let user_id;
                let item_id;
                for (item = 1; item < 2; item++) {
                    user_id = response.body[item].userId;
                    // console.log("userId: " + user_id);
                    expect(user_id).to.be.a('number');
                    item_id = response.body[item].id;
                    // console.log("id: ",item_id);
                    expect(item_id).to.be.a('number');
                }
            })
    })
    it('Validates Post Comments', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts/1/comments'})
            .should((response) => {

                console.log(response.body);

                expect(response.body[0]).to.have.all.keys('postId', 'id', 'name', 'email', 'body')

                expect(response.status).to.eq(200);
                expect(response.body[0].postId).to.not.be.null;
                expect(response.body[0].id).to.not.be.null;
                expect(response.body[0].name).to.not.be.null;
                expect(response.body[0].email).to.not.be.null;
                expect(response.body[0].body).to.not.be.null;

                // TO DO - This doesn't appear to be working; Need to find out why.
                Cypress._.each(response.body.comment, (comment) => {
                    expect(comment.postId).to.not.be.null;
                    expect(comment.id).to.not.be.null;
                    expect(comment.name).to.not.be.null;
                    expect(comment.email).to.not.be.null;
                    expect(comment.body).to.not.be.null;
                    console.log("some comment:", comment);
                })
            })
    })
});


