function minOperations(nums: string | any[],queries: number[]) {
    const res : number[] = []
    for(let i = 0; i < nums.length; i++){
        let sum = 0
        let currentValue = nums[i]
        for(let query of queries){

                if(currentValue > query){
                    let ammount = currentValue
                   do {
                        ammount --
                        sum ++
                       console.log('Este es el ammount',ammount, query, 'del query', sum ,'sum', 'de', currentValue)
                    } while (ammount > query)
        res.push(sum)

                }
                else if(currentValue < query){
                    let ammount = currentValue
                    do {
                        ammount ++
                        sum ++
                        console.log('Este es el ammount',ammount, query, 'del query', sum ,'sum', 'de', currentValue)
                    } while (ammount < query)
                            res.push(sum)

                }
        }
    }
    return res
};

minOperations([3,1,6,8], [1,5] )
