describe("UserListController spec", function() {
    var ctrl, userService, user={
            username: "justin",
            friend : "jake"
        },
    //three user objects
        users = [user, user,user];

    beforeEach(module('ui.router'));
    beforeEach(module('HomeModule'));
    //Mocked Services:
    beforeEach(module({
        UserService: {
            save: function(){}
        }
    }));
    
    beforeEach(inject(function($rootScope, _$controller_, _UserService_) {
        $scope = $rootScope.$new();
        userService= _UserService_;

        spyOn(userService, 'save');
        ctrl = _$controller_('UserListController', {
            $scope : $scope,
            'UserService': userService,
            'users': users
        });
    }));

    it('sanity', function() {
        expect(true).toBeTruthy();
    });
    it('injection test', function() {
       $scope.$apply();
        expect($scope.users===users).toBeTruthy();
    });
});
