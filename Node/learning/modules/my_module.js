

module.exports = {
    fat(a){
        if(a == 1){
            return 1
        }else{
            return a * this.fat(a-1)
        }
    }
}