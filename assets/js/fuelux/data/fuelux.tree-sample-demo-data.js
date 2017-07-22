var DataSourceTree = function(options) {
	this._data 	= options.data;
	this._delay = options.delay;
}

DataSourceTree.prototype.data = function(options, callback) {
	var self = this;
	var $data = null;

	if(!("name" in options) && !("type" in options)){
		$data = this._data;//the root tree
		callback({ data: $data });
		return;
	}
	else if("type" in options && options.type == "folder") {
		if("additionalParameters" in options && "children" in options.additionalParameters)
			$data = options.additionalParameters.children;
		else $data = {}//no data
	}

	if($data != null)//this setTimeout is only for mimicking some random delay
		setTimeout(function(){callback({ data: $data });} , parseInt(Math.random() * 500) + 200);

	//we have used static data here
	//but you can retrieve your data dynamically from a server using ajax call
	//checkout examples/treeview.html and examples/treeview.js for more info
};

var tree_data = {//左侧树结构，展示学院可分配权限人员构成，在此处分为了学院领导、教师职工、学生和企业
	'leader' : {name: '市公司', type: 'folder'}	,
	'instructor' : {name: '区县分公司', type: 'folder'}	,
	'company' : {name: '代维商', type: 'folder'}
}
//tree_data['leader']['additionalParameters'] = {//学院领导的构成，若有多人组成，需将对应type修改为folder
//	'children' : {
//		'dean' : {name: '院长', type: 'item'},
//		'secretary' : {name: '书记', type: 'item'},
//		'assistant-dean' : {name: '副院长', type: 'item'},
//		'assistant-secretary' : {name: '副书记', type: 'item'}
//	}
//}
//tree_data['instructor']['additionalParameters'] = {//教师职工的构成
//	'children' : {
//		'counsellor' : {name: '辅导员', type: 'folder'},
//		'teacher' : {name: '教师', type: 'folder'}
//	}
//}
////辅导员的构成
//tree_data['instructor']['additionalParameters']['children']['counsellor']['additionalParameters'] = {
//	'children' : {
//		'counsellor-01' : {name: '狗剩2', type: 'folder'},
//		'counsellor-02' : {name: '狗剩3', type: 'item'}
//	}
//}
//
//tree_data['instructor']['additionalParameters']['children']['counsellor']['additionalParameters']['children']['counsellor-01']['additionalParameters'] = {
//    'children' : {
//        'counsellor-03' : {name: '狗剩4', type: 'item'},
//        'counsellor-04' : {name: '狗剩5', type: 'item'}
//    }
//}
//
//tree_data['student']['additionalParameters'] = {//学生构成，分为学生干部和普通学生
//	'children' : {
//		'student-leader' : {name: '学生干部', type: 'folder'},
//		'student-ordinary' : {name: '普通学生', type: 'folder'}
//	}
//}
////学生干部的构成，分为纪检部、体育部等等，按需添加，如果还需添加下级菜单，将对应的type改为folder
//tree_data['student']['additionalParameters']['children']['student-leader']['additionalParameters'] = {
//	'children' : {
//		'student-leader-01' : {name: '纪检部', type: 'item'},
//		'student-leader-02' : {name: '体育部', type: 'item'},
//		'student-leader-03' : {name: '组织部', type: 'item'},
//		'student-leader-04' : {name: '团学会办公室', type: 'item'}
//	}
//}
//tree_data['company']['additionalParameters'] = {//公司构成
//	'children' : {
//		'company-01' : {name: '暹罗猫', type: 'item'},
//		'company-02' : {name: '波斯猫', type: 'item'},
//		'company-03' : {name: '加菲猫', type: 'item'}
//	}
//}

var treeDataSource = new DataSourceTree({data: tree_data});




//右侧树结构
var tree_data_1 = {//权限分为增删改查
	'add' : {name: '报修接单', type: 'folder'}	,
	'update' : {name: '接单分单', type: 'folder'}	,
	'delete' : {name: '投诉处理', type: 'folder'}	,
	'see' : {name: '推广管理', type: 'folder'},
	'see2' : {name: '新建处理', type: 'folder'}
}
//tree_data_1['add']['additionalParameters'] = {
//	'children' : {
//		'honest' : {name: '诚信管理', type: 'item'},
//		'execute' : {name: '执行力管理', type: 'item'},
//		'group' : {name: '团队管理', type: 'item'},
//		'skill' : {name: '技能管理', type: 'item'},
//		'health' : {name: '健康管理', type: 'item'}
//	}
//}
//tree_data_1['update']['additionalParameters'] = {
//	'children' : {
//		'honest' : {name: '诚信管理', type: 'item'},
//		'execute' : {name: '执行力管理', type: 'item'},
//		'group' : {name: '团队管理', type: 'item'},
//		'skill' : {name: '技能管理', type: 'item'},
//		'health' : {name: '健康管理', type: 'item'}
//	}
//}
//tree_data_1['delete']['additionalParameters'] = {
//	'children' : {
//		'honest' : {name: '诚信管理', type: 'item'},
//		'execute' : {name: '执行力管理', type: 'item'},
//		'group' : {name: '团队管理', type: 'item'},
//		'skill' : {name: '技能管理', type: 'item'},
//		'health' : {name: '健康管理', type: 'item'}
//	}
//}
//tree_data_1['see']['additionalParameters'] = {
//	'children' : {
//		'honest' : {name: '诚信管理', type: 'item'},
//		'execute' : {name: '执行力管理', type: 'item'},
//		'group' : {name: '团队管理', type: 'item'},
//		'skill' : {name: '技能管理', type: 'item'},
//		'health' : {name: '健康管理', type: 'item'}
//	}
//}
var treeDataSource1 = new DataSourceTree({data: tree_data_1});


