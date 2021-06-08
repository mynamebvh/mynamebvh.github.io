#include <iostream>
#include <string.h>
#include <iomanip>
using namespace std;

struct times {
	int ngay;
	int thang;
	int nam;
};

struct CanBo{
	char maCanBo[30];
	char ten[30];
	times ngaysinh;
	char chucVu[30];
	char gioiTinh[4];
	int bacLuong;
};

void sapXep(CanBo canbo[], int n){
	for(int i = 0 ; i < n - 1; i++){
		for(int j = 0 ; j < n - 1; j++){
			if(strcmp(canbo[j].ten, canbo[j+1].ten) > 0){
			swap(canbo[j].ten, canbo[j+1].ten);
		}
		}
		
	}
	
	for(int i = 0 ; i < n; i++){
		int tuoi = 2020 - canbo[i].ngaysinh.nam;
		cout << tuoi << " ";
		if(tuoi >= 60){
			cout << canbo[i].ten;
			cout << endl;
		}
	}
}
int main(){
	CanBo *canbo = new CanBo[100];
	int n;
	
	cin >> n;
	for(int i = 0 ; i < n; i++){
		fflush(stdin);
//		cout << "nhap ma can bo: ";
//		gets(canbo[i].maCanBo);
		cout << "nhap ten: ";
		gets(canbo[i].ten);
//		cout << "nhap ngay sinh: ";
//		cin >> canbo[i].ngaysinh.ngay;
//		cout << "nhap thang sinh: ";
//		cin >> canbo[i].ngaysinh.thang;
		cout << "nhap nam sinh: ";
		cin >> canbo[i].ngaysinh.nam;
		fflush(stdin);
//		cout << "nhap chuc vu: ";
//		gets(canbo[i].chucVu);
		cout << "nhap gioi tinh: ";
		gets(canbo[i].gioiTinh);
//		cout << "nhap bac luong: ";
//		cin >> canbo[i].bacLuong;
	}
	
	
	sapXep(canbo, n);
	
	return 0;
}