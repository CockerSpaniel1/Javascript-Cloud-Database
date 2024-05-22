class Movie{    //start

    //建構子(式) constructor
    constructor(id,engTitle,chiTitle,length){
        this.id=id;
        this.engTitle=engTitle;
        this.chiTitle=chiTitle;
        this.length=length;
    }

    //建立method 方法,(函數)
    showMovie(){
        console.log("電影編號：" + this.id);
        console.log("英文名稱：" + this.engTitle);
        console.log("中文名稱：" + this.chiTitle);
        console.log("放映長度：" + this.length);
    }

    getMovieInfo(){
        return "電影編號：" + this.id + "<br>"
              +"英文名稱：" + this.engTitle + "<br>"
              +"中文名稱：" + this.chiTitle + "<br>"
              +"放映長度：" + this.length + "<br>" 
    }

    //getter
    getMovieId(){
        return "電影編號：" + this.id + "<br>";
    }

    getMovieEngTitle(){
        return  "英文名稱：" + this.engTitle + "<br>";
    }

    getMovieChiTitle(){
        return  "中文名稱：" + this.chiTitle + "<br>";
    }

    getMovieLength(){
        return  "放映長度：" + this.length + "<br>";
    }

    //setter
    setMovieEngTitle(engTitle){
        this.engTitle=engTitle;
    }

    setMovieChiTitle(chiTitle){
        this.chiTitle=chiTitle;
    }

    setMovieLength(length){
        this.length=length;
    }


    //static method 靜態方法,可以使用類別名稱直接調用
    static getMovieSystem(){
        return "BSNET 電影管理系統";
    }   

}//end

//----------------------------------------------

//Inheritance 繼承,extends 關鍵字
class subMovie extends Movie{
    constructor (id,engTitle,chiTitle,length,case2){
        //呼叫上(父)類別的建構子
        super(id,engTitle,chiTitle,length);
        this.case2=case2;
    }
}        