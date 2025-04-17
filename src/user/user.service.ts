import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepo:Repository<User>
    ){}

    create(data:Partial<User>){
        const user=this.userRepo.create(data);
        return this.userRepo.save(user);
    }

    findById(id:string){
        return this.userRepo.findOne({where:{id}});
    }

    findByEmail(email:string){
        return this.userRepo.findOne({where:{email}});
    }

    findAll(){
        return this.userRepo.find();
    }
}
