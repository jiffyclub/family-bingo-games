let bingo_cards = [
    {'text': 'a - Apple', 'image': './img/apple.png'},
    {'text': 'b - Bird', 'image': './img/bird.png'},
    {'text': 'c - Car', 'image': './img/car.png'},
    {'text': 'd - Dump Truck', 'image': './img/dump-truck.png'},
    {'text': 'e - Elephant', 'image': './img/elephant.png'},
    {'text': 'f - Flower', 'image': './img/flower.png'},
    {'text': 'g - Guitar', 'image': './img/guitar.png'},
    {'text': 'h - House', 'image': './img/house.png'},
    {'text': 'i - Ice Cream', 'image': './img/ice-cream.png'},
    {'text': 'j - Journal', 'image': './img/journal.png'},
    {'text': 'k - King', 'image': './img/king.png'},
    {'text': 'l - Lion', 'image': './img/lion.png'},
    {'text': 'm - Mushroom', 'image': './img/mushroom.png'},
    {'text': 'n - Neptune', 'image': './img/neptune.png'},
    {'text': 'o - Orange', 'image': './img/orange.png'},
    {'text': 'p - Pear', 'image': './img/pear.png'},
    {'text': 'r - Robot', 'image': './img/robot.png'},
    {'text': 's - Spaceship', 'image': './img/spaceship.png'},
    {'text': 't - Train', 'image': './img/train.png'},
    {'text': 'u - Umbrella', 'image': './img/umbrella.png'},
    {'text': 'w - Whale', 'image': './img/whale.png'},
    {'text': 'x - XOXO', 'image': './img/xoxo.png'},
    {'text': 'y - Yellow Submarine', 'image': './img/yellow-submarine.png'},
    {'text': 'z - Zebra Dress', 'image': './img/zebra-dress.png'}
];

choices = _.shuffle(bingo_cards);
let history_img_tmpl = _.template(
    '<img class="bingo-history-image" src="<%= image %>">')

let update_page = function update_page(choice) {
    $('#bingo-text').text(choice['text']);
    $('#bingo-image').attr('src', choice['image']);
    $('#bingo-history').append(history_img_tmpl(choice));
};

next_choice = function next_choice() {
    let choice = choices.pop();
    update_page(choice);

    if (choices.length === 0) {
        $('#next-button').prop('disabled', true);
        $('#reload-button').show();
    }
};

$('#next-button').click(next_choice);
$('#reload-button').click(function () {
    location.reload(true);
});
