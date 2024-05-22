export function add(x,y){
    return x+y;
}

export function subtract(x,y){
    return x-y;
}

export function multiply(x,y){
    return x*y;
}

export function divide(x,y){
    if(y===0){
        throw new Error("分母不得為零!!");   
    }
    return x/y;
}

export function payMethod(pay,price,qty){
    let total=0;
    let str='';
    switch(pay){
        case 1:
            total=price*qty;
            str='現金';
            break;
        case 1:
            total=price*qty;
            str='現金';
            break;
        case 2:
            total=price*qty*0.95;
            str='信用卡';
            break;
        case 3:
            total=price*qty*0.9;
            str='Line Pay';
            break;
        case 4:
            total=price*qty*0.88;
            str='悠遊卡';
            break;
        case 5:
            total=price*qty*0.85;
            str='一卡通';
            break;
        default:
            str="您的支付方式，目前尚無支援,請改用現金或其他支付方法，謝謝";    
    }
    return  `付款方式：${str}<br>應付金額：${total} 元`;  

    } //Template Literal(Template String), 模板文字,模板物件,
    /*
    要使用`` 反引號包裹
    嵌入運算式 ${}
    */ 