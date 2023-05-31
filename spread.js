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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var input = {
    UserId: 'myUser',
    Date: '2021-03-03'
};
var request = {
    UserId: 'abc',
    Date: '2021-01-01',
    RequestType: 'NewSave',
    policy: {
        Foo: 'bar'
    }
};
var finalObject = __assign({}, input);
console.log(finalObject);
