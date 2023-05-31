/*

Using spread operator, resolve the following problem. You have the `input` variable and the `request` variable, and would like to combine both objects to get the `finalObject` as a result, using the spread operator.

const input = {
UserId: 'myUser',
Date: '2021-03-03'
};

const request = {
UserId: 'abc',
Date: '2021-01-01',
RequestType: 'NewSave',
policy: {
   Foo: 'bar'
}
};

const finalObject = {
  UserId: 'myUser',
Date: '2021-03-03',
RequestType: 'NewSave',
policy: {
   Foo: 'bar'
}
}; */

const inputData = {
      UserId: 'myUser',
      Date: '2021-03-03'
      }
      
      const requestData = {
      UserId: 'abc',
      Date: '2021-01-01',
      RequestType: 'NewSave',
      policy: {
      Foo: 'bar'
      }
      }

      const finalObjectData = {...requestData,...inputData 
            };

console.log(finalObjectData)