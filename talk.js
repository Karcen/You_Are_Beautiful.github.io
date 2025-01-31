$(function() {
    $('#yes').click(function(event) {
        modal('我就知道Moon小姐姐知道自己最好看~(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', A);
    });
});

function A() {
    modal('Moon小姐姐无敌好看！', B);
}

function B() {
    modal('不知道这个有没有新意 ）低头', C);
}

function C() {
    modal('不感觉，不存在的', D);
}

function D() {
    modal('这是不可能的，马克思都不同意！！！', E);
}

function E() {
    modal('你最好看~', F);
}

function F() {
    modal('你是我见过最好看的女孩子', G);
}

function G() {
    modal('我发誓+1008611', H);
}

function H() {
    modal('我想和你环球旅行', I);
}
 function I() {
    modal('每天嘘寒问暖', J)
}
function I() {
    modal('会哄你睡觉', J)
}
function I() {
    modal('会唱歌给你听', J)
}
function I() {
    modal('Moon小姐姐最好看。么么哒！', J)
}
function I() {
    modal('请Moon小姐姐欣赏烟花表演！', J)
}

function J() {
    modal('来喽！焰火表演！', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
