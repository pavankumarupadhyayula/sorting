'use strict';
module.exports = function sortCategoriesForInsert(inputJson) {
  try {
    const data = inputJson;
    if (data) {
      let temp = data;
      let tempLen = temp.length;
      let parent = temp.filter((item) => item.parent_id === null);
      const plen = parent.length;
      if (plen > 0) {
        const array = [];
        let i = 0;
        while (i < plen) {
          var subArray = [parent[i]];
          for (var k = 0; k < tempLen; k++) {
            if (parent[i].id === temp[k].parent_id) {
              subArray.push(temp[k]);
              for (var n = 0; n < tempLen; n++) {
                if (temp[k].id === temp[n].parent_id) {
                  subArray.push(temp[n]);
                }
              }
            }
          }
          array.push(subArray);
          i++;
        }
        let result;
        if (array.length > 0) {
          result = array.reduce((a, b) => a.concat(b), []);
        } else {
          throw 'Opps! Array is empty. Please verify array object.';
        }
        return result;
      } else {
        throw 'Opps! Please verify inputJson object. I dont see parent.';
      }
    } else {
      throw 'inputJson is undefined';
    }
  } catch (err) {
    throw { error: err };
  }
};
