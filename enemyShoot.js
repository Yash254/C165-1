AFRAME.registerComponent("enemy-bullets", {
    init: function () {
        setInterval(this.shootEnemyBullet, 2000)
    },
    shootEnemyBullet: function () {
        var els=document.querySelectorAll('.enemy');
        
        for (let i = 0; i < els.length; i++) {
            var enemyBullet = document.createElement('a-entity');
            enemyBullet.setAttribute('geometry',{
                primitive:'sphere',
                radius:0.1
            });
            enemyBullet.setAttribute('material','color','#282b29');
            var position=els[i].getAttribute('position');
            enemyBullet.setAttribute('position',{
                x:position.x+1.5,
                y:position.y+3.5,
                z:position.z
            })
            var scene=document.querrySelector('#scene');
            scene.appendChind(enemyBullet);

            var position1=new THREE.Vector3();
            var position2=new THREE.Vector3();
            player.getWorldPosition(position1);
            enemy.getWorldPosition(position2);

            var direction=new THREE.Vector3();
            direction.subVectors(position1,position2).nomalize();
            enemyBullet.setAttribute('velocity',direction.multiplyScalar(10));
            enemyBullet.setAttribute('dynamic-body',{
                shape:"sphere",
                mass:'0'
            })

            var enemy=els[i].object3D;
            var player=document.querrySelector('weapon').object3D;
            enemyBullet.addEventListener('collide',function(e){
                if (e.detail.body.el.id==='weapon') {
                    
                }
            })
        }
    },

});