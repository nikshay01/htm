let hour = [2,2,1,5,1]
let minute = [15,14,30,30,1]
let second = [35,0,5,5,1]
let total_seconds=[]
let op=["+","+","-","+"]
let results=[]
for(i=0;i<hour.length;i++){
    hour[i]*= 60*60
    minute[i]*= 60
    total_seconds.push(hour[i]+ minute[i] + second[i])
    console.log(total_seconds[i]);
    if(i>0){
        console.log("reached in index: "+i);
        if(results.length==0){
        switch(op[i-1]){                                                                     //automation needed
            case "+": results.push(total_seconds[i-1] + total_seconds[i])
            break;
            case "-": results.push(total_seconds[i-1] - total_seconds[i])
            break;
        }}
        else{
        switch(op[i-1]){
            case "+": results.push(results[i-2] + total_seconds[i])
            break;
            case "-": results.push(results[i-2] - total_seconds[i])
            break;
        }
        }
    }
}
for(j=0;j<results.length;j++){
    hour[j]=results[j]/60/60
    minute[j]=60*(hour[j]-Math.floor(hour[j]))
    second[j]=60*(minute[j]-Math.floor(minute[j]))
    hour[j]=Math.floor(hour[j])
    minute[j]=Math.floor(minute[j])
    second[j]=Math.round(second[j])
    console.log(hour[j],":", minute[j],":",second[j]);
}
// hour[0]=results[0]/60/60
// minute[0]=60*(hour[0]-Math.floor(hour[0]))
// second[0]=60*(minute[0]-Math.floor(minute[0]))
// hour[0]=Math.floor(hour[0])
// minute[0]=Math.floor(minute[0])
// second[0]=Math.round(second[0])
// console.log(hour[0],":", minute[0],":",second[0]);
// console.log(total_seconds);
