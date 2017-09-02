import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titlecase'
})
export class TitleCasingPipe implements PipeTransform{

    transform(value: string) : string{
        if(!value) return null;
        
        let tokens = value.toLowerCase().split(' ');     
        for(let i = 0; i < tokens.length; i++) {
            let word = tokens[i];
            if(i > 0 && this.isPreposition(word))
                tokens[i] = word;
            else
                tokens[i] = this.capitalizeFirtLeter(word);
        }
        return tokens.join(' ');
    }

    capitalizeFirtLeter(value: string) : string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    private isPreposition(word: string): boolean {
        let prepositions = ['of', 'the', 'in', 'on'];
        return prepositions.includes(word);
    }

}