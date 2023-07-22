import { useEffect, useRef, useState } from 'react'
import './styles/App.css'
import { useInterval } from './hooks/useInterval'
import { Settings } from './components/settings/Settings'
import { useTypesSelector } from './hooks/useTypesSelector'
import { ControllerBox } from './components/ControllerBox/ControllerBox'
const canvasX = 1000
const canvasY = 1000
const initialSnake = [ [ 4, 10 ], [ 4, 10 ] ]
const initialApple = [ 14, 10 ]
const scale = 50
const timeDelay = 100

	const left = [-1, 0]
	const right = [1, 0]
	const up = [0, -1]
	const down = [0, 1]


function App() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const [ snake, setSnake ] = useState(initialSnake)
	const [ apple, setApple ] = useState(initialApple)
	const [ direction, setDirection ] = useState<number[]>(up)
	const [ delay, setDelay ] = useState<number | null>(null)
	const [ gameOver, setGameOver ] = useState(false)
	const [ score, setScore ] = useState(0)
	const [isPlaying, setIsPlaying] = useState(false)
	
	

	useInterval(() => runGame(), delay)

	useEffect(
		() => {
			if (canvasRef.current) {
				const canvas = canvasRef.current

				const ctx = canvas.getContext('2d')
				if (ctx) {
					ctx.setTransform(scale, 0, 0, scale, 0, 0)
					ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
					ctx.fillStyle = "#a3d001"
					snake.forEach(([ x, y ]) => ctx.fillRect(x, y, 1, 1))
					ctx.fillStyle = 'red'
					ctx.fillRect(apple[0], apple[1], 1, 1)
					
				}
			}
		},
		[ snake, apple, gameOver ]
	)

	function handleSetScore() {
		if (score > Number(localStorage.getItem("snakeScore"))) {
			localStorage.setItem("snakeScore", JSON.stringify(score))
		}
	}

	function play(isPlaying: boolean) {
		if (!isPlaying) {
		setSnake(initialSnake)
		setApple(initialApple)
		setDirection(right)
		setDelay(timeDelay)
		setScore(0)
		setGameOver(false)
		setIsPlaying(true)
		} else {
			return
		}
	}

	function checkCollision(head: number[]) {
		for (let i = 0; i < head.length; i++) {
			if (head[i] < 0 || head[i] * scale >= canvasX) return true
		}
		for (const s of snake) {
			if (head[0] === s[0] && head[1] === s[1]) return true
		}
		return false
	}

	function appleAte(newSnake: number[][]) {
		let coord = apple.map(() => Math.floor(Math.random() * canvasX / scale))
		if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
			let newApple = coord
			setScore(score + 1)
			setApple(newApple)
			return true
		}
		return false
	}

	function runGame() {
		const newSnake = [ ...snake ]
		const newSnakeHead = [ newSnake[0][0] + direction[0], newSnake[0][1] + direction[1] ]
		newSnake.unshift(newSnakeHead)
		if (checkCollision(newSnakeHead)) {
			setDelay(null)
			setGameOver(true)
			handleSetScore()
			setIsPlaying(false)
		}
		if (!appleAte(newSnake)) {
			newSnake.pop()
		}
		setSnake(newSnake)
	}

	const checkDirection = (newDirection: number[]) => {
		for (let i = 0; i < direction.length; i++) {
			if (direction[i] === newDirection[i]) {
				return true
			}
		
		}
		return false
	}
	const changeDirection = (e: React.KeyboardEvent<HTMLDivElement>) => {
		switch (e.key) {
			case "ArrowLeft":
				if (checkDirection(right)) {
					break
				} else {
					setDirection(left)
				}	
				break
			case "ArrowUp":
				if (checkDirection(down)) {
					break
				} else {
					setDirection(up)
				}	
				break
			case "ArrowRight":
				if (checkDirection(left)) {
				break
				} else {
					setDirection(right)
				}	
				break
			case "ArrowDown":
				if (checkDirection(up)) {
					break
				} else {
					setDirection(down)
				}	
				break
		}
	}

	return (
		<div onKeyDown={(e) => changeDirection(e)}>
			
			{/* <img src='./oldMonitor.png' alt="monitor" width="4000" className="monitor" /> */}
			<div className="playAreaBox">
				<canvas className="playArea" ref={canvasRef} width={`${canvasX}px`} height={`${canvasY}px`} />
				<ControllerBox changeDirection={changeDirection}/>
				{gameOver && <div className="gameOver">Game Over</div>}
				<button onClick={() => play(isPlaying)} className="playButton">
					Play
				</button>
			</div>
			
			<div className="scoreBox">
				<h2>Score: {score}</h2>
				<h2>High Score: {localStorage.getItem("snakeScore")}</h2>
			</div>
			<Settings/>
		</div>
	)
}

export default App
