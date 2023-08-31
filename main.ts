namespace SpriteKind {
    export const FastZombie = SpriteKind.create()
    export const Health = SpriteKind.create()
    export const UnactiveHealth = SpriteKind.create()
    export const Decoy = SpriteKind.create()
    export const Boom = SpriteKind.create()
    export const flashbang = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Zombie1 = SpriteKind.create()
    export const Zombie2 = SpriteKind.create()
    export const Zombie3 = SpriteKind.create()
    export const Zombie4 = SpriteKind.create()
    export const Zombie5 = SpriteKind.create()
}
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Fixed, 50, function (status) {
    Final_Boss.follow(Gooby_Boi, 40)
    Final_Boss.startEffect(effects.trail)
})
info.onScore(randint(40, 50), function () {
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
    game.showLongText("A Bomb Is Hidden Somewhere!", DialogLayout.Center)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boom, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Boom)
    sprites.destroy(Nuke, effects.warmRadial, 500)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    sprites.destroyAllSpritesOfKind(SpriteKind.Zombie1, effects.disintegrate, 5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Zombie2, effects.disintegrate, 5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Zombie3, effects.disintegrate, 5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Zombie4, effects.disintegrate, 5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Zombie5, effects.disintegrate, 5000)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.setDialogTextColor(3)
    game.showLongText("Tips: If A bomb has spawned, try to use as soon as you can, because one bomb clears out EVERYTHING, including that power-up. If you need health, but zombies are surrounding the pack, try to strafe upward/downward to the med-pack, because blue zombies and some reds move faster when you go straight up or down, and so you get them a little tricked. Zombies deal damage over time, not instantly so you can use this time to find health before your lives run out.", DialogLayout.Full)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Zombie1, function (sprite, otherSprite) {
    Gooby_Boi.startEffect(effects.trail, 500)
    pause(1000)
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
})
sprites.onDestroyed(SpriteKind.Health, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Square, 187, 3644, 223, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
sprites.onCreated(SpriteKind.Zombie5, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 436, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
info.onScore(randint(50, 60), function () {
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
    game.showLongText("A Bomb Is Hidden Somewhere!", DialogLayout.Center)
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
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
    Final_Boss.follow(Gooby_Boi, 20)
    statusbar.value += 30
    music.play(music.createSoundEffect(WaveShape.Noise, 2574, 2361, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    pause(5000)
    Final_Boss.follow(Gooby_Boi, 30)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Bullet = sprites.create(img`
        . . . . 5 1 . . . . 
        . . . . 4 5 . . . . 
        . . . d d d d . . . 
        . . . d d d d . . . 
        . . . d d d d . . . 
        . . . b d d d . . . 
        . . . b b d d . . . 
        . . . c b b b . . . 
        . . c c b b c b . . 
        . . c c c c c c . . 
        `, SpriteKind.Projectile)
    Bullet.setVelocity(Gooby_Boi.vx + 20, Gooby_Boi.vy + 30)
    Bullet.setFlag(SpriteFlag.DestroyOnWall, true)
    Bullet.setPosition(Gooby_Boi.x, Gooby_Boi.y)
    music.play(music.createSoundEffect(
    WaveShape.Noise,
    5000,
    3323,
    255,
    255,
    200,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Curve
    ), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    if (Bullet.overlapsWith(Final_Boss)) {
        sprites.destroy(Bullet)
        statusbar.value += -8.5
    }
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
    game.showLongText("A Bomb Is Hidden Somewhere!", DialogLayout.Center)
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
sprites.onDestroyed(SpriteKind.Boss, function (sprite) {
    music.stopAllSounds()
    music.play(music.createSong(hex`0078000408020701001c000f05001202c102c201000405002800000064002800031400060200041e0000000400011e08000c00012410001400012218001c00012234003800011d03001c0001dc00690000045e01000400000000000000000000056400010400030c0034003800012538003c00012004001c00100500640000041e000004000000000000000000000000000a0400041e0000000400011b0c001000012714001800011b18001c00011b24002800011d05001c000f0a006400f4010a0000040000000000000000000000000000000002250014001800012924002800012728002c00011e2c00300002202730003400012a3c004000011d06001c00010a006400f40164000004000000000000000000000000000000000213001c002000021e2420002400012c24002800012208001c000e050046006603320000040a002d0000006400140001320002010002180008000c00011b0c001000011b14001800011e1c002000012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8002c00040005000201060800090001020c000d0002040914001500010720002100010838003900010a3c003d00010a`), music.PlaybackMode.LoopingInBackground)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "You Have Survived!")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Zombie4, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
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
        `, SpriteKind.Zombie4)
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
        `, SpriteKind.Zombie5)
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
        `, SpriteKind.Zombie1)
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
        `, SpriteKind.Zombie2)
    Zombie2.setPosition(randint(-180, 180), randint(-180, 180))
    Zombie2.follow(Gooby_Boi, 25)
})
info.onScore(randint(30, 40), function () {
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
    game.showLongText("A Bomb Is Hidden Somewhere!", DialogLayout.Center)
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
sprites.onCreated(SpriteKind.Zombie2, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 436, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Zombie3, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(Final_Boss, effects.disintegrate, 5000)
})
sprites.onDestroyed(SpriteKind.Zombie1, function (sprite) {
    info.changeScoreBy(1)
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
sprites.onCreated(SpriteKind.Zombie1, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 436, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Zombie2, function (sprite, otherSprite) {
    Gooby_Boi.startEffect(effects.trail, 500)
    pause(1000)
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
})
sprites.onDestroyed(SpriteKind.Zombie4, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Zombie2, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
sprites.onCreated(SpriteKind.Zombie4, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 436, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
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
    music.stopAllSounds()
    pause(1000)
    music.play(music.createSong(hex`0078000408020403001c0001dc00690000045e0100040000000000000000000005640001040003420000000400011d08000c0001240c001000012010001400011e14001800012018001c0001201c002000012424002800011d2c003000011d34003800012038003c00012405001c000f0a006400f4010a0000040000000000000000000000000000000002130008000c00011b18001c0001193c004000021d2507001c00020a006400f401640000040000000000000000000000000000000003060030003400011b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800240000000100010610001100010618001900010320002100010424002500010428002900010a`), music.PlaybackMode.LoopingInBackground)
    game.setGameOverPlayable(false, music.melodyPlayable(music.buzzer), false)
    game.setGameOverMessage(false, "You were Infected")
    game.gameOver(false)
})
sprites.onDestroyed(SpriteKind.Zombie2, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Zombie4, function (sprite, otherSprite) {
    Gooby_Boi.startEffect(effects.trail, 500)
    pause(1000)
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
})
sprites.onDestroyed(SpriteKind.Zombie5, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Zombie3, function (sprite, otherSprite) {
    Gooby_Boi.startEffect(effects.trail, 500)
    pause(1000)
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
})
sprites.onDestroyed(SpriteKind.Zombie3, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Zombie5, function (sprite, otherSprite) {
    Gooby_Boi.startEffect(effects.trail, 500)
    pause(1000)
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Zombie1, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
info.onScore(75, function () {
    music.stopAllSounds()
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    game.splash("Your test", "Has Begun...")
    music.play(music.createSoundEffect(
    WaveShape.Sawtooth,
    1,
    650,
    255,
    255,
    500,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Curve
    ), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`002c010408020403001c0001dc00690000045e01000400000000000000000000056400010400032a0008000c00011b10001400011b18001c00012020002400012224002800011b28002c00011b38003c00012904001c00100500640000041e000004000000000000000000000000000a0400043b0000000400021e2708000c00011e10001400011d14001800021d221c00200002192020002400011d28002c00021d1e30003400011b38003c0002191e05001c000f0a006400f4010a0000040000000000000000000000000000000002120000000400011928002c00012034003800012209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80018000c000d0001061c001d0001052400250001053c003d00010a`), music.PlaybackMode.LoopingInBackground)
    Final_Boss = sprites.create(img`
        ..........bbb333333bb...........
        ........bb333bbbbb3bbbb.........
        ......bbb3333bbbbbbbbbbbb.......
        .....bbbbb33bbbbbbbbbbbbbb......
        ....bbb3bbbbbbbbbbbbbbbbbbb.....
        ...bbb33bfffffbbbbbfffffbbbb....
        ..bbbb3bfffbfffbbbfbbffffbbbb...
        ..bbbbbcffbffffbbbffffbffcbbb...
        .bbbbbcffff3fbfbbbfbf3ffffcbbb..
        .bbbbcfcffffbbfcbcfbbffffcfcbb..
        bbbbbfbcffbbfffcbcfffbbffccfbbb.
        bbbbbbbcfffffffcbcfffffffcbbbbb.
        bbbbbbbfcccccccbbbcccccccfbbbbb.
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
        bbbbbbbbbbbbbbbcbcbbbbbbbbbbbbb.
        bbbbbbbbbbbbbbccbccbbbbbbbbbbbb.
        bbbbbbbbbbbbbbccbccbbbbbbbbbbbb.
        bbbbbbbbbbbcbcfcbcfcbcbbbbbbbbb.
        bbbbbbbbbbfcbcfcdcfcbcfbbbbbbbb.
        bbbbbbbbbffcdcfcdcfcdcffbbbbbbb.
        .bbbbbbbffffcfffcfffcffffbbbbb..
        .cbbbbbfffffffffffffffffffbbbc..
        .ccbbbfffffffffffffffffffffbc...
        ..ccbffffffdffffffffffffffffc...
        ...cffffffdcdfffffffdffffffc....
        ....bffffdccbffdffddcdfffbc.....
        .....cbbbcccbfdcfbccccbbbc......
        ......ccccccccccbcccccccc.......
        ........ccccccccccccccc.........
        ..........ccccccccccc...........
        ................................
        `, SpriteKind.Boss)
    Final_Boss.follow(Gooby_Boi, 30)
    Final_Boss.setPosition(76, 57)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.setColor(12, 13, 3)
    statusbar.positionDirection(CollisionDirection.Bottom)
    statusbar.max = 200
    statusbar.value = 200
    statusbar.attachToSprite(Final_Boss)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.setPosition(Final_Boss.x, Final_Boss.y - 10)
})
sprites.onCreated(SpriteKind.Zombie3, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 436, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Zombie5, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
info.onScore(randint(60, 70), function () {
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
    game.showLongText("A Bomb Is Hidden Somewhere!", DialogLayout.Center)
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
let Zombie5: Sprite = null
let Zombie4: Sprite = null
let Bullet: Sprite = null
let statusbar: StatusBarSprite = null
let Nuke: Sprite = null
let Final_Boss: Sprite = null
let MedPack: Sprite = null
let Zombie2: Sprite = null
let Zombie1: Sprite = null
let Gooby_Boi: Sprite = null
music.play(music.createSong(assets.song`Zombie Song`), music.PlaybackMode.LoopingInBackground)
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
game.splash("Zombie Survival")
music.stopAllSounds()
music.play(music.createSong(hex`0078000408020701001c000f05001202c102c201000405002800000064002800031400060200040c0010001400012224002800012504001c00100500640000041e000004000000000000000000000000000a040004370000000400012504000800011918001c00011d1c002000011d24002800012728002c00011b34003800011e38003c0001223c00400002192005001c000f0a006400f4010a0000040000000000000000000000000000000002060020002400012006001c00010a006400f40164000004000000000000000000000000000000000224001400180001221c002000012424002800011e28002c00012434003800012238003c00012707001c00020a006400f401640000040000000000000000000000000000000003130010001400011b2c003000012530003400021d2208001c000e050046006603320000040a002d000000640014000132000201000218000c001000012710001400012918001c0001252c003000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80030000000010001010400050001020800090001040c000d0001042800290001042c002d0001043800390001093c003d000109`), music.PlaybackMode.LoopingInBackground)
info.setScore(0)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level1`)
info.startCountdown(15)
Gooby_Boi = sprites.create(assets.image`Player`, SpriteKind.Player)
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
    `, SpriteKind.Zombie1)
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
    `, SpriteKind.Zombie2)
Zombie2.setPosition(131, 17)
Zombie2.follow(Gooby_Boi, 25)
let Zombie3 = sprites.create(img`
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
    `, SpriteKind.Zombie3)
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
game.setGameOverScoringType(game.ScoringType.HighScore)
forever(function () {
    if (info.score() >= 75) {
        info.stopCountdown()
    }
})
