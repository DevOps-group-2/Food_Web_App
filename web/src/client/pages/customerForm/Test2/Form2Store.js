const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment

class Form2Store {
    formData = ["Loading data"];

    constructor(props) {
        makeAutoObservable(this,{},{autoBind:true});
        this.fetchData();
    }

    fetchData (){
        fetch(baseUrl + "api/data").then(
            (response)=> response.json().then(
                (json)=> runInAction(()=>this.formData=json)
            )
        )
    }
}
