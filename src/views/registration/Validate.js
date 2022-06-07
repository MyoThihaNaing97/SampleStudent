

/**
 *  
 * test or null
 */
    export const isNullorBlank=(value)=>{
        if(value === null || value === undefined || value === ""){
            return false
        }else
            return true
}

/**
 * to test integer
 */

 let numberFormat= /^[0-9]{0,9}(\.[0-9]{1,2})?$/;
 export const numberCheck = (value) => {
     if(value.match(numberFormat)){
         return true;
     }else return false;
 }

 /**
  * email Check
  */
  let emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  export const emailCheck = (value) => {
      if(value.match(emailFormat)){
          return true;
      }
      else return false;
  }
  /**
   * name check
   */
  
export const nameCheck = (value) => {
    let nameFormat = /^[a-z]+$/g;
    if(value.match(nameFormat)) {
        return true;

    }else return false;

}