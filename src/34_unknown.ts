// just like any (but with any TS allows eveything)
// for unknow TS forbids eveything


function func (data: unknown){
    if (data != null && typeof data === 'object' && 'name' in data)
        console.log(data.name)
}

//we have to do narrowing in order to escape errors