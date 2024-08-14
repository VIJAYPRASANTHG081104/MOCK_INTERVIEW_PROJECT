const findDucplicate = (data,year,event,faculty)=>{
    const temp = data[year][event].faculties;
    for(let index of temp){
        if(index.faculty.toString()=== faculty){
            return true
        }
    }
    return false;
}
module.exports = {findDucplicate}