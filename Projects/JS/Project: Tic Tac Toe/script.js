const game_board = (function () {
    let score = [0, 0];
    let move_count = 0;
    let player1_symbol = 'x';
    let player2_symbol = 'o';
    let actual_player = 'x';
    let play_again = false;
    let matrix = [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-'],
    ];

    const update_score = (player) => {
        player.toLowerCase() == player1_symbol ? score[0]++ : score[1]++;
    }
    const print_score = () => {
        console.log(score);
    }
    const show_board = () => {
        console.log('Current State:');
        matrix.forEach(row => console.log([...row]));
        console.log('Move count: ' + move_count + '\n');
        console.log('Actual player: ' + actual_player + '\n');

        let container = document.querySelector('.game_board');
        container.innerHTML = '';
        let square_count = 0;
        for(let i = 0; i < 3; i++)
        {
            for(let j = 0; j < 3; j++)
            {
                let square = document.createElement('div');
                square.className = 'square';
    
                if(matrix[i][j] == player1_symbol)
                    square.style.backgroundColor = '#D22B2B';
                else if(matrix[i][j] == player2_symbol)
                    square.style.backgroundColor = '#6495ED';
    
                square.addEventListener('click', () => {
                    if(!play_again)
                    {
                        make_move(i, j, actual_player);
                        let has_winner = check_winner();
                        let draw;
                        if(!has_winner)
                            draw = check_draw();
                        if(!draw && !has_winner)
                            register_next_player(actual_player);
                        show_board();
                    }
                });

                square.id = square_count++;
                container.appendChild(square);
            }
        }
    }
    const reset_board = () => {
        for(let i = 0; i < 3; i++)
            for(let j = 0; j < 3; j++)
                matrix[i][j] = '-';
        move_count = 0;
        play_again = false;
        show_board();
    }
    const make_move = (x, y, player) => {
        if(x < 0 || x >= 3 || y < 0 || y >= 3)
        {
            console.error('ERROR! Index out of bounds!');
            return 'IndexOutOfBounds';
        }
        else if(matrix[x][y] == 'x' || matrix[x][y] == 'o')
        {
            console.error('ERROR! Board position already selected');
            return 'AlreadySelected'; 
        }
        player.toLowerCase() == player1_symbol ? matrix[x][y] = 'x' : matrix[x][y] = 'o';
        actual_player == player1_symbol ? actual_player = player2_symbol : actual_player = player1_symbol;
        move_count++;
        return 'Success';
    }
    const check_winner = (player) => {
        const p = actual_player == player1_symbol ? player2_symbol : player1_symbol;
        p.toLowerCase();
        const win_combos = [
            // Rows
            [[0,0], [0,1], [0,2]],
            [[1,0], [1,1], [1,2]],
            [[2,0], [2,1], [2,2]],
            // Cols
            [[0,0], [1,0], [2,0]],
            [[0,1], [1,1], [2,1]],
            [[0,2], [1,2], [2,2]],
            // Diagonal
            [[0,0], [1,1], [2,2]],
            [[0,2], [1,1], [2,0]]
        ];

        for (const combo of win_combos) 
        {
            if (combo.every(([i, j]) => matrix[i][j] === p)) 
            {
                console.log("Player: " + p.toUpperCase() + " Won!");
                play_again = true;
                register_winner(p);
                play_again_prompt();
                return 1;
            }
        }
        return 0;
    };
    const check_draw = () => {
        let draw = !(matrix.some(row => row.includes('-')));
        if(draw)
        {
            console.log("Draw!");
            play_again = true;
            register_draw();
            play_again_prompt();
            return 1;
        }
        return 0;
    };
    const register_winner = (winner) => {
        let container = document.querySelector('.container');
        let winner_box = document.createElement('div');
        winner_box.className = 'winner_box';
        winner_box.style.order = -1;
        winner_box.textContent = 'Player: ' + winner.toUpperCase() + ' Won!';
        container.appendChild(winner_box);
        winner == player1_symbol ? score[0]++ : score[1]++;
    }
    const register_draw = () => {
        let container = document.querySelector('.container');
        let draw_box = document.createElement('div');
        draw_box.className = 'draw_box';
        draw_box.style.order = -1;
        draw_box.textContent = 'Draw!';
        container.appendChild(draw_box);
    }
    const register_next_player = (player) => {
        let game_board_container = document.querySelector('.game_board_container')
        remove_elemento_dom('next_player');
        next_player = document.createElement('div');
        next_player.className = 'next_player';
        next_player.style.order = -1;
        next_player.textContent = 'Next Player: ' + player.toUpperCase();
        game_board_container.appendChild(next_player);
    }
    const register_score = () => {
        let game_board_container = document.querySelector('.game_board_container')
        let scoreboard = document.createElement('div');
        scoreboard.className = 'scoreboard';
        scoreboard.textContent = 'Player X: ' + score[0] + '\n' + 'Player O: ' + score[1] + '\n';
        game_board_container.appendChild(scoreboard);
    }
    const remove_elemento_dom = (element) => {
        let e = document.querySelector('.' + element);
        if (e)
            e.remove();
    }
    const play_again_prompt = () => {
        register_score();
        let container = document.querySelector('.container');
        let play_again_button = document.createElement('div');
        play_again_button.className = 'play_again';
        play_again_button.textContent = 'Play Again';
        play_again_button.addEventListener('click', () => {
            play_again = false;
            play_again_button.remove();
            reset_board();
            show_board();
            
            remove_elemento_dom('draw_box');
            remove_elemento_dom('winner_box');
            remove_elemento_dom('scoreboard');
            register_next_player(actual_player);
        });
        remove_elemento_dom('next_player');
        container.appendChild(play_again_button);
    }
    return {show_board, register_next_player};
})();

game_board.show_board();
game_board.register_next_player('x');


