import * as THREE from 'three'
import gsap from 'gsap'

// ------ 주제: 라이브러리를 이용한 애니메이션

export default function example() {
    // html에서 캔버스 가져와서 사용하기
    const canvas = document.querySelector('#three-canvas')
    const renderer = new THREE.WebGLRenderer({ 
        canvas,
        antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)

    // Scene
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog('black', 3, 7)

    // Camera
    // perspective Camera(원근 카메라)
    const camera = new THREE.PerspectiveCamera(
        75, // 시야각(field of view)
        window.innerWidth / window.innerHeight, // 종횡비(aspect)
        0.1, // near
        1000 // far
    )

    camera.position.y = 1
    camera.position.z = 5
    scene.add(camera)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.x = 1
    light.position.y = 3
    light.position.z = 5
    scene.add(light)


    // Mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({
        color: 'red'
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    
    // 그리기
    let time = Date.now()
    
    function draw() {
        const newTime = Date.now()
        const deltaTime = newTime - time
        time = newTime

        // meshes.forEach(item => {
        //     item.rotation.y += deltaTime * 0.001
        // })
        
        renderer.render(scene, camera)

        // window.requestAnimationFrame(draw)
        renderer.setAnimationLoop(draw)
    }

    // gsap
    gsap.to(
        mesh.position,
        {
            duration: 1,
            y: 2,
            z: 3
        }
    )

    function setSize() {
        // 카메라
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.render(scene, camera)
    }

    // 이벤트
    window.addEventListener('resize', setSize)

    draw()
}