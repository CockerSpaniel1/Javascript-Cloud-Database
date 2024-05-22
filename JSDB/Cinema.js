   //建立class,使用關鍵字class
   export class Cinema{    //start

    //建構子(式) constructor
    constructor(id,engTitle,chiTitle,length){
        this.id=id;
        this.engTitle=engTitle;
        this.chiTitle=chiTitle;
        this.length=length;
    }

    //建立method 方法,(函數)
    showCinema(){
        console.log("電影編號：" + this.id);
        console.log("英文名稱：" + this.engTitle);
        console.log("中文名稱：" + this.chiTitle);
        console.log("放映長度：" + this.length);
    }

    getCinemaInfo(){
        return "電影編號：" + this.id + "<br>"
              +"英文名稱：" + this.engTitle + "<br>"
              +"中文名稱：" + this.chiTitle + "<br>"
              +"放映長度：" + this.length + "<br>" 
    }

    //getter
    getCinemaId(){
        return "電影編號：" + this.id + "<br>";
    }

    getCinemaEngTitle(){
        return  "英文名稱：" + this.engTitle + "<br>";
    }

    getCinemaChiTitle(){
        return  "中文名稱：" + this.chiTitle + "<br>";
    }

    getCinemaLength(){
        return  "放映長度：" + this.length + "<br>";
    }

    //setter
    setCinemaEngTitle(engTitle){
        this.engTitle=engTitle;
    }

    setCinemaChiTitle(chiTitle){
        this.chiTitle=chiTitle;
    }

    setCinemaLength(length){
        this.length=length;
    }


    //static method 靜態方法,可以使用類別名稱直接調用
    static getCinemaSystem(){
        return "BSNET 電影管理系統";
    }   

}//end

//----------------------------------------------

//Inheritance 繼承,extends 關鍵字
class subCinema extends Cinema{
    constructor (id,engTitle,chiTitle,length,case2){
        //呼叫上(父)類別的建構子
        super(id,engTitle,chiTitle,length);
        this.case2=case2;
    }
} 