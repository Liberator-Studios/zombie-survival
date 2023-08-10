namespace SpriteKind {
    export const FastZombie = SpriteKind.create()
    export const Health = SpriteKind.create()
    export const UnactiveHealth = SpriteKind.create()
    export const Decoy = SpriteKind.create()
    export const Boom = SpriteKind.create()
    export const flashbang = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boom, function (sprite, otherSprite) {
    sprites.destroy(Nuke)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.disintegrate, 5000)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Tips: If a zombie is glitched and wont take damage, use the bombs to clear them out and fix them. If you need health, but zombies are surrounding the pack, try to strafe upward/downward to the med-pack, because blue zombies and some reds move faster when you go straight up or down, and so you get them a little tricked. Zombies deal damage over time, not instantly so you can use this time to find health before you lives run out.", DialogLayout.Full)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Bullet = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 1 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . b d d d . . . . . . 
        . . . . . . b b d d . . . . . . 
        . . . . . . c b b b . . . . . . 
        . . . . . c c b b c b . . . . . 
        . . . . . c c c c c c . . . . . 
        `, SpriteKind.Projectile)
    Bullet.setPosition(Gooby_Boi.x, Gooby_Boi.y)
    Bullet.setVelocity(Gooby_Boi.vx + 20, Gooby_Boi.vy + 20)
})
info.onScore(randint(10, 50), function () {
    game.setDialogFrame(img`
        ..................................................................
        ............fff........fff.............fff..............ffff......
        ...........fddbf......fbdbf...........fbdbf............fbddf......
        ...........fddbbf.....fdddffff........fdddffff...fff..ffddbff.....
        ...........fddddffffffbdddbddbffffffffbdddbddbffffddffddddddf.....
        ...fff....fdddddfddddddddbbddddddddddddddbbddddddfdddddbccddf.....
        .fffddf..fddffffddddddddddbbddddddddddddddbbdddddffbddbbddff......
        .fdbddfffddfffdddfffffbdddbddbffffffffbdddbddbfffefddccbddf.......
        .fdddcddddffeffffeeeeefbdbfddfeeeeeeeefbdbfddfeeeefffcddddf.......
        .fbddcddddfeeeeeeeeeeeefffffffeeeeeeeeefffffffeeeeeeefdddddf......
        ..ffdbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddf.....
        ...fddbcddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfff..
        ....fddccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddf.
        ....fdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddddf.
        ...fddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbbf.
        ...fddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbf..
        ...ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddfff...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
        ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
        .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
        .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
        .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
        ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
        ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
        .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
        .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
        .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
        ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff...
        ..fbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddf...
        .fbbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbddf...
        .fddddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddf....
        .fddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccddf....
        ..fffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddcbddf...
        .....fddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbbbdff..
        ......fdddddfeeeeeeefffffffeeeeeeeeefffffffeeeeeeeeeeeefddddcddbf.
        .......fddddcfffeeeefddfbdbfeeeeeeeefddfbdbfeeeeeffffeffddddcdddf.
        .......fddbccddfefffbddbdddbffffffffbddbdddbfffffdddfffddfffddbdf.
        ......ffddbbddbffdddddbbddddddddddddddbbddddddddddffffddf..fddfff.
        .....fddccbdddddfddddddbbddddddddddddddbbddddddddfdddddf....fff...
        .....fddddddffddffffbddbdddbffffffffbddbdddbffffffddddf...........
        .....ffbddff..fff...ffffdddf........ffffdddf.....fbbddf...........
        ......fddbf............fbdbf...........fbdbf......fbddf...........
        ......ffff..............fff.............fff........fff............
        ..................................................................
        `)
    game.showLongText("3 Bombs are hidden somewhere!", DialogLayout.Center)
    for (let index = 0; index < 3; index++) {
        Nuke = sprites.create(img`
            . . . . f f f f f f f . . . . . 
            . . f f f f f f f f f f f . . . 
            . f 5 f f f f f f f f f 5 f . . 
            . f 5 5 f f f f f f f 5 5 f . . 
            f 5 5 5 5 f f f f f 5 5 5 5 f . 
            f 5 5 5 5 5 f f f 5 5 5 5 5 f . 
            f 5 5 5 5 5 f f f 5 5 5 5 5 f . 
            f f f f f f f 5 f f f f f f f . 
            f f f f f f f f f f f f f f f . 
            f f f f f f f 5 f f f f f f f . 
            f f f f f f 5 5 5 f f f f f f . 
            . f f f f 5 5 5 5 5 f f f f . . 
            . f f f f 5 5 5 5 5 f f f f . . 
            . . f f f f 5 5 5 f f f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Boom)
        Nuke.setPosition(randint(-180, 180), randint(-180, 180))
    }
})
info.onCountdownEnd(function () {
    info.startCountdown(7.5)
    Zombie4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 8 8 8 8 8 8 9 . . . 
        . . . 9 9 8 8 8 8 8 8 8 8 8 . . 
        . . 9 8 8 f 8 f 8 8 f 8 f 8 8 . 
        . . 9 8 8 8 f 8 8 8 8 f 8 8 8 . 
        . . 8 8 8 f 8 f 8 8 f 8 f 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 6 . 
        . . 8 8 8 8 8 f f f f 8 8 8 6 . 
        . . 8 8 8 f f f 8 8 f f f 8 6 . 
        . . . 8 8 8 f 8 8 8 8 f 8 6 . . 
        . . . . 8 8 8 8 8 8 8 8 6 . . . 
        . . . . . 8 8 8 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Zombie4.follow(Gooby_Boi, 35)
    Zombie4.setPosition(randint(-180, 180), randint(-180, 180))
    Zombie5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 2 2 2 2 2 2 3 . . . 
        . . . 3 3 2 2 2 2 2 2 2 2 2 . . 
        . . 3 2 2 f 2 f 2 2 f 2 f 2 2 . 
        . . 3 2 2 2 f 2 2 2 2 f 2 2 2 . 
        . . 2 2 2 f 2 f 2 2 f 2 f 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
        . . 2 2 2 2 2 f f f f 2 2 2 4 . 
        . . 2 2 2 f f f 2 2 f f f 2 4 . 
        . . . 2 2 2 f 2 2 2 2 f 2 4 . . 
        . . . . 2 2 2 2 2 2 2 2 4 . . . 
        . . . . . 2 2 2 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Zombie5.setPosition(randint(-180, 180), randint(-180, 180))
    Zombie5.follow(Gooby_Boi, 25)
    Zombie1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 2 2 2 2 2 2 3 . . . 
        . . . 3 3 2 2 2 2 2 2 2 2 2 . . 
        . . 3 2 2 f 2 f 2 2 f 2 f 2 2 . 
        . . 3 2 2 2 f 2 2 2 2 f 2 2 2 . 
        . . 2 2 2 f 2 f 2 2 f 2 f 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
        . . 2 2 2 2 2 f f f f 2 2 2 4 . 
        . . 2 2 2 f f f 2 2 f f f 2 4 . 
        . . . 2 2 2 f 2 2 2 2 f 2 4 . . 
        . . . . 2 2 2 2 2 2 2 2 4 . . . 
        . . . . . 2 2 2 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Zombie1.setPosition(randint(-180, 180), randint(-180, 180))
    Zombie1.follow(Gooby_Boi, 20)
    Zombie2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 2 2 2 2 2 2 3 . . . 
        . . . 3 3 2 2 2 2 2 2 2 2 2 . . 
        . . 3 2 2 f 2 f 2 2 f 2 f 2 2 . 
        . . 3 2 2 2 f 2 2 2 2 f 2 2 2 . 
        . . 2 2 2 f 2 f 2 2 f 2 f 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
        . . 2 2 2 2 2 f f f f 2 2 2 4 . 
        . . 2 2 2 f f f 2 2 f f f 2 4 . 
        . . . 2 2 2 f 2 2 2 2 f 2 4 . . 
        . . . . 2 2 2 2 2 2 2 2 4 . . . 
        . . . . . 2 2 2 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Zombie2.setPosition(randint(-180, 180), randint(-180, 180))
    Zombie2.follow(Gooby_Boi, 25)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Health, function (sprite, otherSprite) {
    sprites.destroy(MedPack)
    MedPack = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 3 3 1 1 1 . . . 
        . . . . 1 b 1 1 2 2 1 1 1 1 . . 
        . . . . b 1 3 2 2 2 2 4 1 1 . . 
        . . . . 1 1 3 2 2 2 2 4 1 b . . 
        . . . . b 1 1 1 3 4 1 1 1 b . . 
        . . . . b b 1 1 3 4 1 b b b . . 
        . . . . b b b b c c b b b b . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Health)
    MedPack.setStayInScreen(true)
    MedPack.setPosition(Gooby_Boi.x, Gooby_Boi.y)
    MedPack.x += randint(-180, 180)
    MedPack.y += randint(-180, 180)
    info.changeLifeBy(1)
    Gooby_Boi.startEffect(effects.hearts, 1000)
})
info.onLifeZero(function () {
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    Gooby_Boi.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 2 2 2 2 2 2 3 . . . 
        . . . 3 3 2 2 2 2 2 2 2 2 2 . . 
        . . 3 2 2 f 2 f 2 2 f 2 f 2 2 . 
        . . 3 2 2 2 f 2 2 2 2 f 2 2 2 . 
        . . 2 2 2 f 2 f 2 2 f 2 f 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
        . . 2 2 2 2 2 f f f f 2 2 2 4 . 
        . . 2 2 2 f f f 2 2 f f f 2 4 . 
        . . . 2 2 2 f 2 2 2 2 f 2 4 . . 
        . . . . 2 2 2 2 2 2 2 2 4 . . . 
        . . . . . 2 2 2 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(1000)
    game.setGameOverPlayable(false, music.melodyPlayable(music.buzzer), false)
    game.setGameOverMessage(false, "You were Infected")
    game.gameOver(false)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Bullet.overlapsWith(Zombie1)) {
        sprites.destroy(Zombie1)
        sprites.destroy(Bullet)
    }
    if (Bullet.overlapsWith(Zombie2)) {
        sprites.destroy(Zombie2)
        sprites.destroy(Bullet)
    }
    if (Bullet.overlapsWith(Zombie3)) {
        sprites.destroy(Zombie3)
        sprites.destroy(Bullet)
    }
    if (Bullet.overlapsWith(Zombie4)) {
        sprites.destroy(Zombie4)
        sprites.destroy(Bullet)
    }
    if (Bullet.overlapsWith(Zombie5)) {
        sprites.destroy(Zombie5)
        sprites.destroy(Bullet)
    }
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Gooby_Boi.startEffect(effects.trail, 500)
    pause(1000)
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
})
let Zombie5: Sprite = null
let Zombie4: Sprite = null
let Bullet: Sprite = null
let Nuke: Sprite = null
let MedPack: Sprite = null
let Zombie3: Sprite = null
let Zombie2: Sprite = null
let Zombie1: Sprite = null
let Gooby_Boi: Sprite = null
game.setGameOverScoringType(game.ScoringType.HighScore)
scene.setBackgroundImage(img`
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fff
    2222222222222222222222222222222111111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fff
    2222222222222222222222222222111111111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fff
    222222222222222222222222221111111111111111111111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffff
    22222222222222221111122111111111111111111111111111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffff
    2221111111111111111111111111111111111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffff
    221111111111111111111111111111111111222111111111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffff
    22111111111111111111111111111111222222222211111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffff
    22111111111111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffff
    2211111111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffff
    221111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222f222222222222222ffff22222222222222222222222ffffffffffffffffff
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffff222222222222fffffff2222222222222222222ffffffffffffffffffff
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffff22222222222222ffffffffffffffffffffff
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffff2222222222222ffffffffffffffffffffff
    2222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff222222222222ffffffffffffffffffffff
    2222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffff
    2222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffffffffffffffff
    222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffffffffffffffffff
    f2222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffffffffffffffffff
    f22222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffffffffffffffffff
    ff2222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffff
    fff22222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffff
    fff2222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222fffffffffffffffffffffff
    ffff222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222ffffffffffffffffffffff
    ffff22222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222fffffffffffffffffffff
    ffff22222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222fffffffffffffffffffff
    fffff222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222212222222fffffffffffffffffffff
    fffff22222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222211222222fffffffffffffffffffff
    ffffff222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222111222222fffffffffffffffffffff
    ffffff222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222111222222fffffffffffffffffffff
    fffffff2222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222111222222fffffffffffffffffffff
    fffffff22222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222111222222fffffffffffffffffffff
    fffffff222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222221112222222fffffffffffffffffffff
    ffffffff222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222211122222222fffffffffffffffffffff
    ffffffff2222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222221122222222ffffffffffffffffffffff
    ffffffff222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222211222222222ffffffffffffffffffffff
    ffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222221222222222fffffffffffffffffffffff
    ffffffff2222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222fffffffffffffffffffffff
    ffffffff22222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222ffffffffffffffffffffffff
    ffffffff2222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222fffffffffffffffffffffffff
    ffffffff222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222fffffffffffffffffffffffffff
    ffffffff222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffff
    ffffffff22222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffff
    ffffffff22222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff22222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff22222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff22222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffff
    ffffff222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffff
    ffffff2222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffff
    ffffff2222111112222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffff
    fffff222211111122222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffffff
    fffff2222111111222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffffff
    ffff222221111112222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffff
    ffff2222211111122222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222fffffffffff
    ffff22222111111222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222fffffffffff
    ffff222221111122222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222fffffffffff
    ffff22222111112222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222ffffffffff
    ffff22222111112222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222ffffffffff
    ffff22222111112222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222ffffffffff
    ffff22222111112222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222ffffffffff
    ffff22222111112222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222fffffffff
    ffff22222111112222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222fffffffff
    ffff22222111111222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222fffffffff
    fffff2222111111222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222ffffffff
    fffff2222111111112222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222ffffffff
    fffff2222111111111222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222ffffffff
    ffffff22221111111112222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2221111122222ffffffff
    fffffff2221111111111222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2221111122222ffffffff
    ffffffff2211111111112222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2221111122222ffffffff
    fffffffff222111111112222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2221111122222ffffffff
    ffffffffff2221111111222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2221111122222ffffffff
    ffffffffffff22211111222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222ffffffff
    fffffffffffff222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222ffffffff
    ffffffffffffff2222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222fffffffff
    fffffffffffffff22222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff2222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff222222ffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff22222222ffffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff22222f222222222fffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff22222f2222222222ffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff222222222222222222ffffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff2222222.22222222222fffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff22222222ff22222222222ffffffffff222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff222222222ff2222222222ffffffffff22222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffff
    fffffffff222222222ff222222222ffffffffff222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffff
    ffff22222.222222222fff2222222fffffffffff22222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffff
    ffff222222f222222222fff222222fffffffffff222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffff
    ffff222222ff222222222fffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffff
    ffff2222222ff22222222fffffffffffffffffff22222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffff22222fffffffffffffffffffffffffffff
    ffff22222222ff2222222fffffffffffffffffff22222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222fffffff22222fffffffffffffffffffffffffffff
    fffff22222222ff222222fffffffffffffffffff222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffff222222ffffffff22222ffffffffffffffff
    fffff222222222ff22222fffffffffffffffffff2222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222ffffff222222ffffffff22222ffffffffffffffff
    ffffff222222222fffffffffffffffffffffffff2222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffff222222ffffffff22222ffffffffffffffff
    fffffff222222222ffffffffffffffffffffffff2222212222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffff222222fffffff222222ffffffffffffffff
    ffffffff22222222fffffffffffffffffffffff22222211222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffff222222ffffff2222222ffffffffffffffff
    fffffffff2222222fffffffffffffffffffffff22222211122222ffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffff222222ffffff2222222ffffffffffffffff
    fffffffff2222222fffffffffffffffffffffff22222211122222fffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffff222222ffff222222222ffffffffffffffff
    fffffffffff22222ffffffffffffffffffffff222222211222222ffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffff222222ffff22222222fffffffffffffffff
    fffffffffff22222fffffffffffffffffffff2222222111222222ffffffffffffffffffffffffffffffffffffffffffffffffff22222222222ffffffffff2222222fff222222222fffffffffffffffff
    ffffffffffffffffffffffffffffffffffff22222222111222222ffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffff22222222ff222222222ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff22222222112222222fffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffff2222222222f222222222fffffffffffffffffff
    fffffffffffffffffffffffffffffffffff22222222112222222fffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffff222222222f222222222ffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff222222221122222222fffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffff222222222f222222222fffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff222222221222222222fffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffff22222222222222222222ffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff22222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffff222222fffffffffff222222222ff222222222ffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff22222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffff22222222222fff22222222fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffff222222fffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff22222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffff22222ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff2222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222ffffff22222ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff22222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffffff
    `)
game.splash("Zombie Survival", "Game by Liberator")
info.setScore(0)
info.setLife(3)
scene.setBackgroundImage(img`
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaabbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaabbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaabbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaabbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaabbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaabbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaabbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbaaaaaaaaaaaaaa
    aaaaaaaaaaaaabbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbaaaaaaaaaaaaaa
    aaaaaaaaaaaabbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbaaaaaaaaaaaaaa
    aaaaaaaaaabbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbaaaaaaaaaaaaaa
    aaaaaaaaabbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbaaaaaaaaaaa
    aaaaaaaaabbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbaaaaaaaaaaa
    aaaaaaaabbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbaaaaaaaaaaa
    aaaaaaaabbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbaaaaaaaaaaa
    aaaaaaabbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbaaaaaaaaaaa
    aaaaabbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbaaaaaaaaaaaa
    aaaabbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbaaaaaaaaaaaa
    aaabbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbaaaaaaaaaaaa
    bbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbaabbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaa
    bbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbabbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbaaaaaaaaaaaaa
    bbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbabbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbaaaaaaaaa
    bbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbaaaaaaaaa
    bbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbaaaaaaaaa
    bbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbaaaaaaaaa
    bbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbaaaaaaaaa
    bbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbccccccccccc
    bbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccbbbbbbbcccccccccccc
    bbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbaacccccccccccccccccccccccccccccccccccccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
tiles.setCurrentTilemap(tilemap`level1`)
info.startCountdown(15)
Gooby_Boi = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . 3 3 b 3 . . . . . 
    . . . . . . 3 3 b b b 3 . . . . 
    . . . . . . 3 b b b b b . . . . 
    . . . . . . 3 f b b f b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . . b f b b f b . . . . 
    . . . . . . b b f f b b . . . . 
    . . . . . . b b b b b c . . . . 
    . . . . . . c b b b b c . . . . 
    . . . . . . c b c b c c . . . . 
    . . . . . . . c c c c . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Gooby_Boi, 50, 30)
Gooby_Boi.setStayInScreen(true)
Zombie1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 2 2 2 2 2 2 3 . . . 
    . . . 3 3 2 2 2 2 2 2 2 2 2 . . 
    . . 3 2 2 f 2 f 2 2 f 2 f 2 2 . 
    . . 3 2 2 2 f 2 2 2 2 f 2 2 2 . 
    . . 2 2 2 f 2 f 2 2 f 2 f 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
    . . 2 2 2 2 2 f f f f 2 2 2 4 . 
    . . 2 2 2 f f f 2 2 f f f 2 4 . 
    . . . 2 2 2 f 2 2 2 2 f 2 4 . . 
    . . . . 2 2 2 2 2 2 2 2 4 . . . 
    . . . . . 2 2 2 4 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Zombie1.setPosition(19, 13)
Zombie1.follow(Gooby_Boi, 20)
Zombie2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 2 2 2 2 2 2 3 . . . 
    . . . 3 3 2 2 2 2 2 2 2 2 2 . . 
    . . 3 2 2 f 2 f 2 2 f 2 f 2 2 . 
    . . 3 2 2 2 f 2 2 2 2 f 2 2 2 . 
    . . 2 2 2 f 2 f 2 2 f 2 f 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
    . . 2 2 2 2 2 f f f f 2 2 2 4 . 
    . . 2 2 2 f f f 2 2 f f f 2 4 . 
    . . . 2 2 2 f 2 2 2 2 f 2 4 . . 
    . . . . 2 2 2 2 2 2 2 2 4 . . . 
    . . . . . 2 2 2 4 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Zombie2.setPosition(131, 17)
Zombie2.follow(Gooby_Boi, 25)
Zombie3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 2 2 2 2 2 2 3 . . . 
    . . . 3 3 2 2 2 2 2 2 2 2 2 . . 
    . . 3 2 2 f 2 f 2 2 f 2 f 2 2 . 
    . . 3 2 2 2 f 2 2 2 2 f 2 2 2 . 
    . . 2 2 2 f 2 f 2 2 f 2 f 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
    . . 2 2 2 2 2 f f f f 2 2 2 4 . 
    . . 2 2 2 f f f 2 2 f f f 2 4 . 
    . . . 2 2 2 f 2 2 2 2 f 2 4 . . 
    . . . . 2 2 2 2 2 2 2 2 4 . . . 
    . . . . . 2 2 2 4 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Zombie3.setPosition(80, 117)
Zombie3.follow(Gooby_Boi, 27.5)
scene.cameraFollowSprite(Gooby_Boi)
MedPack = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 3 3 1 1 1 . . . 
    . . . . 1 b 1 1 2 2 1 1 1 1 . . 
    . . . . b 1 3 2 2 2 2 4 1 1 . . 
    . . . . 1 1 3 2 2 2 2 4 1 b . . 
    . . . . b 1 1 1 3 4 1 1 1 b . . 
    . . . . b b 1 1 3 4 1 b b b . . 
    . . . . b b b b c c b b b b . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Health)
MedPack.setPosition(16, 51)
