NumberGuess3.controller('PlayerController', function($scope) {
    $scope.player1 = {name: 'Player 1', guess: null, score: 0};
    $scope.player2 = {name: 'Player 2', guess: null, score: 0};
    $scope.player3 = {name: 'Player 3', guess: null, score: 0};
    $scope.player4 = {name: 'Player 4', guess: null, score: 0};  
    
    $scope.dealer = {name: 'Dealer', guess: null, score: 0};
    $scope.dealerNum = function(){
        $scope.dealer.guess = Math.floor((Math.random() * 10) + 1);
    };
    
    $scope.win = {name: null};
    
    $scope.winner = function(){
        if ($scope.dealer.guess == $scope.player1.guess){
            $scope.player1.score++;
            $scope.win = {name: $scope.player1.name + " has won!"};
            
        } else if($scope.dealer.guess == $scope.player2.guess) {
            $scope.player2.score++;
            $scope.win = {name: $scope.player2.name + " has won!"};
            
        } else if($scope.dealer.guess == $scope.player3.guess) {
            $scope.player3.score++;
            $scope.win = {name: $scope.player3.name + " has won!"};
        
        } else if($scope.dealer.guess == $scope.player4.guess) {
            $scope.player4.score++;
            $scope.win = {name: $scope.player4.name + " has won!"};
            
        } else {
            $scope.dealer.score++;
            $scope.win = {name: "The " + $scope.dealer.name + " has won!"};
        }
    };
    
    $scope.player2Box = {show: true};
    $scope.player3Box = {show: true};
    $scope.player4Box = {show: true};
    
    $scope.toggle1Player = function(){
        $scope.player2Box.show = false;
        $scope.player3Box.show = false;
        $scope.player4Box.show = false;
    };
    $scope.toggle2Player = function(){
        $scope.player2Box.show = true;
        $scope.player3Box.show = false;
        $scope.player4Box.show = false;
    };
    $scope.toggle3Player = function(){
        $scope.player2Box.show = true;
        $scope.player3Box.show = true;
        $scope.player4Box.show = false;
    };
    $scope.toggle4Player = function(){
        $scope.player2Box.show = true;
        $scope.player3Box.show = true;
        $scope.player4Box.show = true;
    };
});
