#version 330 core
out vec4 FragColor;

in vec3 ourColor;
in vec2 texCoord;

uniform sampler2D texture1;
uniform sampler2D texture2;

void main()
{
	vec2 newCoord = 1.0 * texCoord;
	float x = newCoord.x - 1;
	float y = newCoord.y - 1;
	float dist = distance(texCoord, vec2(0.5, 0.5));
	vec4 smiley = texture(texture2, vec2(1 - newCoord.x, newCoord.y));
	smiley.a = pow(1 - dist, 10);
	FragColor = mix(texture(texture1, newCoord), smiley, .9);
}