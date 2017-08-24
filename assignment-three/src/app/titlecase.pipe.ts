import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titlecase'
})
export class TitleCasingPipe implements PipeTransform{

    prepositions = ['with', 'and', 'of', 'the', 'to', 'in', 'from', 'for', 'over', 'before', 'between', 'after', 'on', 'by', 'about', 'like'];

    transform(value: string) : string{
        let tokens = value.toLowerCase().split(' ');
        let result = this.capitalizeFirtLeter(tokens[0]) + ' ';        
        for(let token of tokens.slice(1)) {
            result += this.prepositions.includes(token) ? 
                        token + ' ': this.capitalizeFirtLeter(token) + ' ';
        }
        return result;
    }

    capitalizeFirtLeter(value: string) : string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

}