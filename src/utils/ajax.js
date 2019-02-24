import * as superagent from 'superagent'
const baseUrl ="https://localhost:44349";// dotnet

export const loadData=(callBack)=>{
    superagent.get(`${baseUrl}/api/users`)
        .set('Accept', 'application/json')
        .end((err,resp)=>{
            if(err){
                console.log(err)
            }else {
                callBack(resp.body)
            }
        })
}
