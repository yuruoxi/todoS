(function (window) {
	'use strict';

	const vm = new Vue({
		el: '#app',
		data: {
			// 1. 准备假数据, 渲染列表
			list: [{
					id: 1,
					name: '草莓',
					done: true
				},
				{
					id: 2,
					name: '芒果',
					done: false
				},
				{
					id: 3,
					name: '西柚',
					done: true
				},
				{
					id: 4,
					name: '甜橙',
					done: true
				}
			],
			todoName: '',
			// 设置一个初始editId
			editId: -1
		},
		methods: {
			// 2. 删除功能
			// 方法1:
			// delTodo(id) {
			// 	let idx = this.list.findIndex(item => item.id == id)
			// 	this.list.splice(idx, 1)
			// }
			// 方法2: 
			// delTodo(index) {
			// 	this.list.splice(index, 1)
			// }
			// 方法3: (推荐)
			delTodo(id) {
				this.list = this.list.filter(item => item.id != id)
			},

			// 编辑状态
			todoEdit(id) {
				this.editId = id
			},
			// 回车关闭编辑框
			hideEdit() {
				this.editId = -1
			},

			// 添加功能
			addTodo(e) {
				// 去掉两头空格, 若仍为空则不往下继续执行
				if (this.todoName.trim().length === 0) {
					todoName = ''
					return
				}
				this.list.push({
					id: this.list.length === 0 ? 1 : this.list[this.list.length - 1].id + 1,
					name: this.todoName,
					done: false
				})
				this.todoName = ''
			},
			showAllTodos() {
				
			}
		},
		computed: {
			// 计算属性
			isEmpty() {
				return this.list.length > 0
			}
		}
	})

})(window);
