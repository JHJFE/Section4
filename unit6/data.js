import { graphql } from "@octokit/graphql";

async function Data() {
    const TOKEN = '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'

    console.log('hi')
   
    const { repository, viewer } = await graphql({
        
            headers: {
                authorization: `token ${TOKEN}`
            }
        ,
        query : `query {
            repository(owner: "codestates-seb", name: "agora-states-fe") {
              discussions(last: 3){
                    edges{
                        node{
                         
                       }
                    } 
                }
            }
        }`
});
   
console.log(repository)
    repository.then(data => {
       console.log(data)
      
     })
   // console.log(repository)
    return repository
}
export default Data